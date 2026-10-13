# calc-de-imc

[Português](README.pt-BR.md)

A BMI (IMC) calculator built with React and TypeScript during a B7Web course.

> **Type:** study project (2023)

![Calculator](docs/screenshots/calculator.jpg)

## Features

- Height (m) and weight (kg) inputs; computes BMI = weight / height².
- Shows the matching category card (magreza, normal, sobrepeso, obesidade) with your BMI value.
- Back arrow to clear the result and start again.
- Interface text is in Portuguese.

## Stack

React 18, TypeScript 4.9, CSS Modules, Create React App (`react-scripts` 5). The app lives in the `react_calc_imc/` folder.

## Running locally

Requires Node.js (verified with Node 22) and npm.

```bash
cd react_calc_imc
npm ci
npm start        # development server at http://localhost:3000
npm run build    # production build in react_calc_imc/build/
```

## Structure

- `react_calc_imc/src/App.tsx`: form and result view.
- `react_calc_imc/src/helpers/imc.ts`: BMI categories and calculation.
- `react_calc_imc/src/components/GridItem/`: category card.

## Limitations

- Category ranges have small gaps (for example 18.5–18.6 and 24.9–25); a BMI that falls in a gap shows no result.
- No automated tests.
- Old Create React App toolchain: `npm audit` still reports high/moderate advisories in build and dev-server dependencies with no compatible fix within `react-scripts` 5. They do not affect the static build output.
- For learning purposes only; not medical advice.

## Credits

Developed during a [B7Web](https://b7web.com.br) course; the "powered by B7Web" logo comes from the course material.

## Security

See [SECURITY.md](SECURITY.md).

## License

No license has been chosen yet; all rights reserved by the author.
