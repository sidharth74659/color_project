### fonts

[`svg`](./assets/svg/): [feather icons](https://feathericons.com/)

| [Google Fonts](https://fonts.google.com/)                | Links |
| -------------------------------------------------------- | ----- |
| [Inter](https://fonts.google.com/specimen/Inter)         |       |
| [Roboto](https://fonts.google.com/specimen/Roboto)       |       |
| [Oswald](https://fonts.google.com/specimen/Oswald)       |       |
| [Poppins](https://fonts.google.com/specimen/Poppins)     |       |
| [Work Sans](https://fonts.google.com/specimen/Work+Sans) |       |
| Open Sans                                                |       |
| Source Sans Pro                                          |       |
| Open Sans Condensed                                      |       |

### Colors

| Domain       | Link                                                                                                                                                                                                                                                                                                                                |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Forms        | [accessible-color-scheme](https://medium.com/envoy-design/how-to-design-an-accessible-color-scheme-4a13ca12c92b)                                                                                                                                                                                                                    |
| Dark Theme   | [Tips for dark theme design](https://uxplanet.org/8-tips-for-dark-theme-design-8dfc2f8f7ab6) <br> [accessibility inspired dark mode](https://www.habaneroconsulting.com/stories/insights/2021/accessibility-inspired-dark-mode) <br> [material design dark-theme](https://material.io/design/color/dark-theme.html#properties) <br> |
| Grid Layouts | [U.S. Web Design System](https://designsystem.digital.gov/utilities/layout-grid/)                                                                                                                                                                                                                                                   |
| Hover States | Input Field Hover states on [Dell](https://www.dell.com/support/home/en-in/product-support/servicetag/0-U3BWUHowYmlBNTE0eVpycGVmSEZ4dz090/drivers)                                                                                                                                                                                  |

### Tools

- [CSS filter generator](https://codepen.io/sosuke/full/Pjoqqp) to turn images/svg color to a target color
- [Tint & Shade Generator](https://maketintsandshades.com/)

### Useful scripts

- #### Adding background color only for [padding?](https://stackoverflow.com/questions/14628601/can-i-add-background-color-only-for-padding)

- #### keyboard accessibility for [details element](https://thepaciellogroup.github.io/AT-browser-tests/test-files/details-summary.html) and [for other elements test](https://thepaciellogroup.github.io/AT-browser-tests/) and a [MDN Resource](https://developer.mozilla.org/en-US/docs/Learn/Accessibility/HTML) and have to check [this](https://www.w3.org/TR/WCAG20-TECHS/SCR29.html)

- #### For situations that require adding focus-behaviour to label/div that has an input within it, instead of input [try using:focus-within](https://stackoverflow.com/questions/5978239/anyway-to-have-a-label-respond-to-focus-css)

- #### [Selecting block of code](https://stackoverflow.com/questions/44956653/selecting-block-of-code-in-visual-studio-code) in Visual Studio Code

  Use Alt + Shift + → to expand the selection between braces or tags.

  Use Alt + Shift + ← to shrink the selection between braces or tags.

- #### Dealing with media-queries ? use this [trick](https://codepen.io/sidharth74659/pen/JjyXpKP?editors=0100)

- #### To copy a text to clipboard using a one-line javascript code

  ```js
  navigator.clipboard.writeText(text);
  ```

- #### Find element taking up extra space (wil add the source link when i find it)

  ```js
  var docWidth = document.documentElement.offsetWidth;

  [].forEach.call(document.querySelectorAll("*"), function (el) {
    if (el.offsetWidth > docWidth) {
      console.log(el);
    }
  });
  ```
- #### [Single Page Application Routing](https://stackoverflow.com/questions/52578247/single-page-application-routing)

- #### Why don’t browsers handle routing for [single-page applications?](https://medium.com/@george.norberg/understanding-single-page-application-routing-without-a-library-or-framework-ac781b649995)

- ### Logging into Github from Terminal using Personal Access Tokens

  Personal Access Tokens : Go to profile > Settings > Developer Settings > Personal Access Tokens > Generate New Token > Enable required Permissisons > copy code/token (which is availaible only once)

  `git remote add origin https://[USERNAME]:[NEW TOKEN]@github.com/[USERNAME]/[REPO].git`
