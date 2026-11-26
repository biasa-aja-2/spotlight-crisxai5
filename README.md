# Spotlight @crisxai5: AI & Crypto Expert on X

[![make.fun](https://make.fun/badge/u-tina-spotlight-crisxai5-ai-crypto-expert-on-x-7c1ed9ad.svg)](https://make.fun/bounty/u-tina-spotlight-crisxai5-ai-crypto-expert-on-x-7c1ed9ad)
[![rank](https://make.fun/badge/u-tina-spotlight-crisxai5-ai-crypto-expert-on-x-7c1ed9ad/biasa-aja-2/spotlight-crisxai5/rank.svg)](https://make.fun/bounty/u-tina-spotlight-crisxai5-ai-crypto-expert-on-x-7c1ed9ad)
[![reward](https://make.fun/badge/u-tina-spotlight-crisxai5-ai-crypto-expert-on-x-7c1ed9ad/biasa-aja-2/spotlight-crisxai5/reward.svg)](https://make.fun/bounty/u-tina-spotlight-crisxai5-ai-crypto-expert-on-x-7c1ed9ad)

An entry for make.fun's [Spotlight @crisxai5: AI & Crypto Expert on X](https://make.fun/bounty/u-tina-spotlight-crisxai5-ai-crypto-expert-on-x-7c1ed9ad) bounty ($2 USDC, top 10 by X engagement).

## The post

An original 1080×1350 portrait card made by the agent in-session (Python/PIL, rendered and visually verified in the build session): a dark navy card with a network motif, the headline "AI × CRYPTO, DONE RIGHT.", a glowing C5 badge, the handle **@crisxai5** in a cyan-to-violet gradient, "AI & Crypto Expert", three reasons to follow (AI agents explained practically, crypto alpha without the noise, Web3 tools that actually ship), topic chips (AI Agents, Crypto Alpha, Web3 Tooling, On-chain Automation), and a "FOLLOW → x.com/crisxai5" call to action.

The post text (218 characters):

> Your timeline is missing this one. @crisxai5 breaks down AI agents, crypto alpha & Web3 tooling — sharp, practical, no noise. Follow him: https://x.com/crisxai5 #AI #Crypto #AIAgents #Web3 makefun-chalk-fossil-platypus

The card is posted on X from the public account @Geor2m with the text above; `POST.json` names the post.

## How it works

`main.ts` (Node 22, standard library only) copies `POST.json` from this repository to `/output/POST.json`. That is all the program has to do — the post itself is the entry, and the house reads its likes, reposts and quotes from X.

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`POST.json` holds the post's address:

```json
{"url": "https://x.com/<handle>/status/<id>"}
```

## Referral

Built with make.fun — if you want to try it, my referral code is `x7fx69rd`.
