# Emergency Response Video Vignettes

A small static web app for clinician-led neurorehabilitation safety observation.

The app presents short everyday safety video vignettes, supported visual response choices, and structured note fields. It is intended to help clinicians observe how a person identifies risks, reasons about possible consequences, communicates a response, and chooses what to do next.

Live site: https://emergency-response-video-vignettes.vercel.app

## What It Does

- Presents short video scenarios involving everyday risks.
- Supports open clinical questions before multiple-choice prompts.
- Offers patient-facing visual choices for supported communication.
- Lets clinicians record prompts, responses, observations, and contextual notes.
- Exports a text or JSON session summary for local clinical documentation.

## Current Scenarios

- Pan fire
- Overflowing sink
- Road traffic risk
- Trip hazard
- Unwell person
- Possible doorstep scam

## Clinical Scope

This app is a clinician-led observation aid. It does not diagnose, score, pass, fail, or replace clinical judgement.

Responses should be interpreted alongside functional observation, cognition, communication needs, fatigue, visual or perceptual factors, collateral history, and multidisciplinary discussion.

## Technical Notes

This is a plain static site built with HTML, CSS, JavaScript, images, videos, a web manifest, and a service worker. There is no backend and no patient data is sent to a server by the app itself.

The site is deployed on Vercel:

- Production site: https://emergency-response-video-vignettes.vercel.app
- Source repository: https://github.com/Brickfielder/emergency-response-video-vignettes
- Production branch: `main`

## Versioning

Stable versions are tracked with Git tags, starting with `v1.0.0`.

Changes should be documented in `CHANGELOG.md`. The versioning and deployment workflow is described in `VERSIONING.md`.

## Development

Because this is a static site, it can be opened directly in a browser or served with any simple local static server.

Example:

```bash
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## Licence

No licence has been selected yet. Until a licence is added, reuse is not explicitly granted beyond normal GitHub viewing and collaboration.
