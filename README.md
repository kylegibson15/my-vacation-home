## My Vacation Home

#### QR Code

![QR Code](./public/QRCode.png)

#### Guest-only content (door codes, Wi-Fi)

Codes and Wi-Fi live in `secrets.json` (git-ignored; see `secrets.example.json`) and are
encrypted with the guest word into `src/data/secrets.enc.json`, which is what ships.

```
npm run secrets -- "<guest word>"
```

Re-run whenever a code, the Wi-Fi password, or the guest word changes, then commit the
updated `src/data/secrets.enc.json`. Building lock hours live in `src/lib/building.ts`.
