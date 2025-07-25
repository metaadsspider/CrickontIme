# Crick On Time

This is a clone of SK FC Player with a custom HLS stream, proxy-based CORS bypass, and Telegram integration.

## 🚀 How to Run

### 1. Host Proxy Server (on Render/Replit)
Use `proxy-server.js` to deploy a CORS-free proxy.

### 2. Edit Stream URL
In `config.json`, change `streamUrl` to use your proxy + HLS `.m3u8` link.

### 3. Host Frontend (GitHub Pages or Cloudflare Pages)
Upload all files except `proxy-server.js`.

Live stream will auto-play.

---

Made for "Crick On Time" - Real-time streaming.
