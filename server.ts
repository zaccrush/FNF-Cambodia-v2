import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Routes
  app.post("/api/register", async (req, res) => {
    try {
      const { role, formData } = req.body;
      
      console.log(`Received registration for ${role}:`, formData);

      // Setup Nodemailer
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: parseInt(process.env.SMTP_PORT || "587"),
        secure: process.env.SMTP_PORT === "465",
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      const mailOptions = {
        from: process.env.SMTP_USER || "noreply@fnfcambodia.com",
        to: process.env.REGISTRATION_EMAIL || "registrations@fnfcambodia.com",
        subject: `New FNF Registration: ${role}`,
        text: `
          New Registration Details:
          Role: ${role}
          Name: ${formData.name || formData.gymName}
          Email: ${formData.email}
          ${formData.phone ? `Phone: ${formData.phone}` : ""}
          ${formData.gym ? `Gym: ${formData.gym}` : ""}
          ${formData.record ? `Record: ${formData.record}` : ""}
          ${formData.coachName ? `Coach: ${formData.coachName}` : ""}
          ${formData.activeFighters ? `Active Fighters: ${formData.activeFighters}` : ""}
          ${formData.discipline ? `Discipline: ${formData.discipline}` : ""}
          
          Socials:
          Facebook: ${formData.facebook || "N/A"}
          Instagram: ${formData.instagram || "N/A"}
          Telegram: ${formData.telegram || "N/A"}
        `,
      };

      // In a real environment, you'd check if SMTP_USER is set. 
      // If not, we'll just log successful "mock" send for the demo.
      if (process.env.SMTP_HOST) {
        await transporter.sendMail(mailOptions);
        res.json({ success: true, message: "Email sent successfully" });
      } else {
        console.warn("SMTP_HOST not set. Logging email to console instead of sending.");
        console.log("--- EMAIL CONTENT START ---");
        console.log(mailOptions.text);
        console.log("--- EMAIL CONTENT END ---");
        res.json({ success: true, message: "Registration received (Mock email logged)" });
      }

    } catch (error) {
      console.error("Registration error:", error);
      res.status(500).json({ success: false, message: "Failed to process registration" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
