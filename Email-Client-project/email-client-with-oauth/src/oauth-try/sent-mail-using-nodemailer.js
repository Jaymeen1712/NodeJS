// ijsqdwyawluuvubd

const nodemailer = require("nodemailer");

const transport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "mugish.beldar333@gmail.com",
    pass: "ijsqdwyawluuvubd",
  },
});

const messageOption = {
  // from: 'mugishbeldar333@gmail.com',
  to: "mugishbeldar333@gmail.com",
  subject: "Example email with all type of attachments",
  text: "This is a test email message.",
  html: `<table
  style="Margin: 0; margin: 0; padding: 0; border-collapse: collapse; border-spacing: 0; width: 100%; background: #fff; height: 100%;"
  width="100%" height="100%">
  <tr style="Margin: 0; margin: 0; padding: 0;">
      <td style="Margin: 0; margin: 0; padding: 0; border-collapse: collapse; text-align: center;" align="center">
          <table class="spacer spacer--40"
              style="Margin: 0; margin: 0; padding: 0; border-collapse: collapse; border-spacing: 0; width: 100%;"
              width="100%">
              <tr style="Margin: 0; margin: 0; padding: 0;">
                  <td style="Margin: 0; margin: 0; padding: 0; border-collapse: collapse; font-size: 40px; height: 40px; line-height: 40px;"
                      height="40">&nbsp;</td>
              </tr>
          </table>

          <table class="container"
              style="padding: 0; border-collapse: collapse; border-spacing: 0; Margin: 0 auto; margin: 0 auto; width: 544px;"
              width="544">
              <tr style="Margin: 0; margin: 0; padding: 0;">
                  <td style="Margin: 0; margin: 0; padding: 0; border-collapse: collapse;">
                      <table class="spacer spacer--16"
                          style="Margin: 0; margin: 0; padding: 0; border-collapse: collapse; border-spacing: 0; width: 100%;"
                          width="100%">
                          <tr style="Margin: 0; margin: 0; padding: 0;">
                              <td style="Margin: 0; margin: 0; padding: 0; border-collapse: collapse; font-size: 16px; height: 16px; line-height: 16px;"
                                  height="16">&nbsp;</td>
                          </tr>
                      </table>

                      <table class="row"
                          style="Margin: 0; margin: 0; padding: 0; border-collapse: collapse; border-spacing: 0; width: 100%;"
                          width="100%">
                          <tr style="Margin: 0; margin: 0; padding: 0;">
                              <th class="column"
                                  style="padding: 0; border-collapse: collapse; Margin: 0 auto; margin: 0 auto; width: 544px;"
                                  width="544">
                                  <table
                                      style="Margin: 0; margin: 0; padding: 0; border-collapse: collapse; border-spacing: 0; width: 100%;"
                                      width="100%">
                                      <tr style="Margin: 0; margin: 0; padding: 0;">
                                          <th style="Margin: 0; margin: 0; padding: 0; border-collapse: collapse; text-align: left; vertical-align: top;"
                                              align="left" valign="top">
                                              <h1
                                                  style="Margin: 0; margin: 0; padding: 0; color: #333; font-family: Montserrat, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; -moz-hyphens: auto; -webkit-hyphens: auto; hyphens: auto; word-wrap: break-word; font-size: 28px; font-weight: 500; line-height: 1.21429;">
                                                  Thanks for your order</h1>
                                          </th>

                                          <th class="expander"
                                              style="Margin: 0; margin: 0; border-collapse: collapse; visibility: hidden; width: 0; text-align: left; vertical-align: top; padding: 0 !important;"
                                              align="left" valign="top"></th>
                                      </tr>
                                  </table>
                              </th>
                          </tr>
                      </table>

                      <table class="spacer spacer--32"
                          style="Margin: 0; margin: 0; padding: 0; border-collapse: collapse; border-spacing: 0; width: 100%;"
                          width="100%">
                          <tr style="Margin: 0; margin: 0; padding: 0;">
                              <td style="Margin: 0; margin: 0; padding: 0; border-collapse: collapse; font-size: 32px; height: 32px; line-height: 32px;"
                                  height="32">&nbsp;</td>
                          </tr>
                      </table>

                      <table class="row"
                          style="Margin: 0; margin: 0; padding: 0; border-collapse: collapse; border-spacing: 0; width: 100%;"
                          width="100%">
                          <tr style="Margin: 0; margin: 0; padding: 0;">
                              <th class="column"
                                  style="padding: 0; border-collapse: collapse; Margin: 0 auto; margin: 0 auto; width: 544px;"
                                  width="544">
                                  <table
                                      style="Margin: 0; margin: 0; padding: 0; border-collapse: collapse; border-spacing: 0; width: 100%;"
                                      width="100%">
                                      <tr style="Margin: 0; margin: 0; padding: 0;">
                                          <th style="Margin: 0; margin: 0; padding: 0; border-collapse: collapse; text-align: left; vertical-align: top;"
                                              align="left" valign="top">
                                              <h2
                                                  style="Margin: 0 0 4px; color: #333; font-family: Montserrat, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; font-size: 21px; font-weight: 500; -moz-hyphens: auto; -webkit-hyphens: auto; hyphens: auto; line-height: 1.57143; margin: 0 0 4px; word-wrap: break-word;">
                                                  ----------------------------------------------------------------------------Order
                                                  #126</h2>

                                              <table class="products"
                                                  style="Margin: 0; margin: 0; padding: 0; border-collapse: collapse; border-spacing: 0; width: 100%; border-top: 1px solid #e5e5e5;"
                                                  width="100%">
                                                  <tr class="products__item"
                                                      style="Margin: 0; margin: 0; padding: 0; border-bottom: 1px solid #e5e5e5;">
                                                      <th colspan="4"
                                                          style="Margin: 0; margin: 0; padding: 0; border-collapse: collapse; text-align: left; vertical-align: top; padding-bottom: 16px; padding-top: 16px;"
                                                          align="left" valign="top">
                                                          <p
                                                              style="Margin: 0; margin: 0; padding: 0; color: #333; font-family: Montserrat, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; font-size: 14px; font-weight: 400; -moz-hyphens: auto; -webkit-hyphens: auto; hyphens: auto; line-height: 1.57143; word-wrap: break-word;">
                                                              <strong style="font-weight: 600;">Ship to</strong>

                                                              <br>

                                                              ----------------------------------------------------------------------------------Akshya
                                                              Nagar 1st Block 1st Cross, Rammurthy nagar,
                                                              defg, Ahmedabad, Gujarat, 380001, India
                                                          </p>
                                                      </th>
                                                  </tr>


                                                  <tr class="products__item"
                                                      style="Margin: 0; margin: 0; padding: 0; border-bottom: 1px solid #e5e5e5;">
                                                      <th class="products__image-container"
                                                          style="Margin: 0; margin: 0; padding: 0; border-collapse: collapse; height: 80px; width: 80px; text-align: left; vertical-align: top; padding-bottom: 16px; padding-top: 16px;"
                                                          width="80" height="80" align="left" valign="top">
                                                          <img src="https://cdn11.bigcommerce.com/r-4b20dad619e29ebf3490f7f35369a8220637ce48/themes/ClassicNext/images/ProductDefault.gif"
                                                              class="products__image"
                                                              alt="Von Duprin QEL Modular CONV Kit, Fits 3 or 4ft Devices"
                                                              style="Margin: 0; margin: 0; padding: 0; color: #333; font-family: Montserrat, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; font-size: 14px; font-weight: 400; -moz-hyphens: auto; -webkit-hyphens: auto; hyphens: auto; line-height: 1.57143; word-wrap: break-word; display: block; outline: 0; text-align: center; max-width: 100%; max-height: 100%; border: 1px solid #ddd; border-radius: 4px; height: 78px; width: 78px;"
                                                              width="78" height="78">
                                                      </th>

                                                      <th class="products__content"
                                                          style="Margin: 0; margin: 0; padding: 0; border-collapse: collapse; padding-right: 24px; text-align: left; padding-bottom: 16px; padding-top: 16px; padding-left: 24px; vertical-align: middle;"
                                                          align="left" valign="middle">
                                                          <p
                                                              style="padding: 0; color: #333; font-family: Montserrat, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; font-size: 14px; font-weight: 400; -moz-hyphens: auto; -webkit-hyphens: auto; hyphens: auto; line-height: 1.57143; word-wrap: break-word; Margin: 0 0 4px; margin: 0 0 4px;">
                                                              <strong
                                                                  style="font-weight: 600;">-------------------Von
                                                                  Duprin QEL
                                                                  Modular CONV Kit, Fits 3 or 4ft Devices</strong>
                                                          </p>

                                                          <p class="products__sku"
                                                              style="padding: 0; color: #333; font-family: Montserrat, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; font-weight: 400; -moz-hyphens: auto; -webkit-hyphens: auto; hyphens: auto; word-wrap: break-word; font-size: 12px; line-height: 1.666667; Margin: 0 0 4px; margin: 0 0 4px;">
                                                              -------------040061</p>

                                                          <p class="products__brand"
                                                              style="padding: 0; color: #333; font-family: Montserrat, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; font-weight: 400; -moz-hyphens: auto; -webkit-hyphens: auto; hyphens: auto; word-wrap: break-word; font-size: 12px; line-height: 1.666667; Margin: 0 0 4px; margin: 0 0 4px;">
                                                              ----------------Brand:
                                                              Von Duprin
                                                          </p>

                                                          <p class="products__attributes"
                                                              style="padding: 0; color: #333; font-family: Montserrat, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; font-weight: 400; -moz-hyphens: auto; -webkit-hyphens: auto; hyphens: auto; word-wrap: break-word; font-size: 12px; line-height: 1.666667; Margin: 0 0 4px; margin: 0 0 4px;">
                                                              Backedorder: Yes</p>

                                                          <p class="products__price"
                                                              style="Margin: 0; margin: 0; padding: 0; color: #333; font-family: Montserrat, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; font-weight: 400; -moz-hyphens: auto; -webkit-hyphens: auto; hyphens: auto; word-wrap: break-word; font-size: 12px; line-height: 1.666667;">
                                                              -------------₹718.20 INR</p>

                                                      </th>

                                                      <th class="products__quantity"
                                                          style="Margin: 0; margin: 0; padding: 0; border-collapse: collapse; width: 65px; text-align: left; padding-bottom: 16px; padding-top: 16px; vertical-align: middle;"
                                                          width="65" align="left" valign="middle">
                                                          <p
                                                              style="Margin: 0; margin: 0; padding: 0; color: #333; font-family: Montserrat, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; font-size: 14px; font-weight: 400; -moz-hyphens: auto; -webkit-hyphens: auto; hyphens: auto; line-height: 1.57143; word-wrap: break-word;">
                                                              ---------------Qty:
                                                              1
                                                          </p>
                                                      </th>

                                                      <th class="products__total"
                                                          style="Margin: 0; margin: 0; padding: 0; border-collapse: collapse; width: 100px; text-align: left; padding-bottom: 16px; padding-top: 16px; vertical-align: middle;"
                                                          width="100" align="left" valign="middle">
                                                          <p
                                                              style="Margin: 0; margin: 0; padding: 0; color: #333; font-family: Montserrat, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; font-size: 14px; font-weight: 400; -moz-hyphens: auto; -webkit-hyphens: auto; hyphens: auto; line-height: 1.57143; word-wrap: break-word; text-align: right;">
                                                              <strong
                                                                  style="font-weight: 600;">---------------₹718.20
                                                                  INR</strong>
                                                          </p>
                                                      </th>
                                                  </tr>
                                              </table>
                                          </th>

                                          <th class="expander"
                                              style="Margin: 0; margin: 0; border-collapse: collapse; visibility: hidden; width: 0; text-align: left; vertical-align: top; padding: 0 !important;"
                                              align="left" valign="top"></th>
                                      </tr>
                                  </table>
                              </th>
                          </tr>
                      </table>

                      <table class="row"
                          style="Margin: 0; margin: 0; padding: 0; border-collapse: collapse; border-spacing: 0; width: 100%;"
                          width="100%">
                          <tr style="Margin: 0; margin: 0; padding: 0;">
                              <th class="column"
                                  style="padding: 0; border-collapse: collapse; Margin: 0 auto; margin: 0 auto; width: 544px;"
                                  width="544">
                                  <table
                                      style="Margin: 0; margin: 0; padding: 0; border-collapse: collapse; border-spacing: 0; width: 100%;"
                                      width="100%">
                                      <tr style="Margin: 0; margin: 0; padding: 0;">
                                          <th style="Margin: 0; margin: 0; padding: 0; border-collapse: collapse; text-align: left; vertical-align: top;"
                                              align="left" valign="top">
                                              <table class="total"
                                                  style="Margin: 0; margin: 0; padding: 0; border-collapse: collapse; border-spacing: 0; width: 100%;"
                                                  width="100%">
                                                  <tr style="Margin: 0; margin: 0; padding: 0;">
                                                      <th style="Margin: 0; margin: 0; padding: 0; border-collapse: collapse; vertical-align: top; text-align: right;"
                                                          valign="top" align="right">
                                                          <table class="total__content"
                                                              style="Margin: 0; padding: 0; border-collapse: collapse; border-spacing: 0; width: auto; margin: 0 0 0 auto;">
                                                              <tr class="total__item"
                                                                  style="Margin: 0; margin: 0; padding: 0;">
                                                                  <th class="total__name"
                                                                      style="Margin: 0; margin: 0; padding: 0; border-collapse: collapse; padding-bottom: 4px; text-align: left; vertical-align: top;"
                                                                      align="left" valign="top">
                                                                      <p
                                                                          style="Margin: 0; margin: 0; padding: 0; color: #333; font-family: Montserrat, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; font-size: 14px; font-weight: 400; -moz-hyphens: auto; -webkit-hyphens: auto; hyphens: auto; line-height: 1.57143; word-wrap: break-word; text-align: right;">
                                                                          -------------Subtotal:</p>
                                                                  </th>

                                                                  <th class="total__value"
                                                                      style="Margin: 0; margin: 0; padding: 0; border-collapse: collapse; padding-bottom: 4px; padding-left: 15px; text-align: left; vertical-align: top;"
                                                                      align="left" valign="top">
                                                                      <p
                                                                          style="Margin: 0; margin: 0; padding: 0; color: #333; font-family: Montserrat, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; font-size: 14px; font-weight: 400; -moz-hyphens: auto; -webkit-hyphens: auto; hyphens: auto; line-height: 1.57143; word-wrap: break-word; text-align: right;">
                                                                          <strong
                                                                              style="font-weight: 600;">-----------₹718.20
                                                                              INR</strong>
                                                                      </p>
                                                                  </th>
                                                              </tr>

                                                              <tr class="total__item"
                                                                  style="Margin: 0; margin: 0; padding: 0;">
                                                                  <th class="total__name"
                                                                      style="Margin: 0; margin: 0; padding: 0; border-collapse: collapse; padding-bottom: 4px; text-align: left; vertical-align: top;"
                                                                      align="left" valign="top">
                                                                      <p
                                                                          style="Margin: 0; margin: 0; padding: 0; color: #333; font-family: Montserrat, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; font-size: 14px; font-weight: 400; -moz-hyphens: auto; -webkit-hyphens: auto; hyphens: auto; line-height: 1.57143; word-wrap: break-word; text-align: right;">
                                                                          ---------Shipping:</p>
                                                                  </th>

                                                                  <th class="total__value"
                                                                      style="Margin: 0; margin: 0; padding: 0; border-collapse: collapse; padding-bottom: 4px; padding-left: 15px; text-align: left; vertical-align: top;"
                                                                      align="left" valign="top">
                                                                      <p
                                                                          style="Margin: 0; margin: 0; padding: 0; color: #333; font-family: Montserrat, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; font-size: 14px; font-weight: 400; -moz-hyphens: auto; -webkit-hyphens: auto; hyphens: auto; line-height: 1.57143; word-wrap: break-word; text-align: right;">
                                                                          <strong
                                                                              style="font-weight: 600;">---------₹0.00
                                                                              INR</strong>
                                                                      </p>
                                                                  </th>
                                                              </tr>

                                                              <tr class="total__item"
                                                                  style="Margin: 0; margin: 0; padding: 0;">
                                                                  <th class="total__name"
                                                                      style="Margin: 0; margin: 0; padding: 0; border-collapse: collapse; padding-bottom: 4px; text-align: left; vertical-align: top;"
                                                                      align="left" valign="top">
                                                                      <p
                                                                          style="Margin: 0; margin: 0; padding: 0; color: #333; font-family: Montserrat, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; font-size: 14px; font-weight: 400; -moz-hyphens: auto; -webkit-hyphens: auto; hyphens: auto; line-height: 1.57143; word-wrap: break-word; text-align: right;">
                                                                          -------------Tax:</p>
                                                                  </th>

                                                                  <th class="total__value"
                                                                      style="Margin: 0; margin: 0; padding: 0; border-collapse: collapse; padding-bottom: 4px; padding-left: 15px; text-align: left; vertical-align: top;"
                                                                      align="left" valign="top">
                                                                      <p
                                                                          style="Margin: 0; margin: 0; padding: 0; color: #333; font-family: Montserrat, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; font-size: 14px; font-weight: 400; -moz-hyphens: auto; -webkit-hyphens: auto; hyphens: auto; line-height: 1.57143; word-wrap: break-word; text-align: right;">
                                                                          <strong
                                                                              style="font-weight: 600;">-----------₹0.00
                                                                              INR</strong>
                                                                      </p>
                                                                  </th>
                                                              </tr>

                                                              <tr class="total__item"
                                                                  style="Margin: 0; margin: 0; padding: 0;">
                                                                  <th class="total__name"
                                                                      style="Margin: 0; margin: 0; padding: 0; border-collapse: collapse; padding-bottom: 4px; text-align: left; vertical-align: top;"
                                                                      align="left" valign="top">
                                                                      <p
                                                                          style="Margin: 0; margin: 0; padding: 0; color: #333; font-family: Montserrat, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; font-size: 14px; font-weight: 400; -moz-hyphens: auto; -webkit-hyphens: auto; hyphens: auto; line-height: 1.57143; word-wrap: break-word; text-align: right;">
                                                                          ---------------Grand Total:</p>
                                                                  </th>

                                                                  <th class="total__value"
                                                                      style="Margin: 0; margin: 0; padding: 0; border-collapse: collapse; padding-bottom: 4px; padding-left: 15px; text-align: left; vertical-align: top;"
                                                                      align="left" valign="top">
                                                                      <p
                                                                          style="Margin: 0; margin: 0; padding: 0; color: #333; font-family: Montserrat, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; font-size: 14px; font-weight: 400; -moz-hyphens: auto; -webkit-hyphens: auto; hyphens: auto; line-height: 1.57143; word-wrap: break-word; text-align: right;">
                                                                          <strong
                                                                              style="font-weight: 600;">-----------₹718.20
                                                                              INR</strong>
                                                                      </p>
                                                                  </th>
                                                              </tr>


                                                              <tr class="total__item"
                                                                  style="Margin: 0; margin: 0; padding: 0;">
                                                                  <th class="total__name"
                                                                      style="Margin: 0; margin: 0; padding: 0; border-collapse: collapse; padding-bottom: 4px; text-align: left; vertical-align: top;"
                                                                      align="left" valign="top">
                                                                      <p
                                                                          style="Margin: 0; margin: 0; padding: 0; color: #333; font-family: Montserrat, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; font-size: 14px; font-weight: 400; -moz-hyphens: auto; -webkit-hyphens: auto; hyphens: auto; line-height: 1.57143; word-wrap: break-word; text-align: right;">
                                                                          ------------------Payment method:</p>
                                                                  </th>

                                                                  <th class="total__value"
                                                                      style="Margin: 0; margin: 0; padding: 0; border-collapse: collapse; padding-bottom: 4px; padding-left: 15px; text-align: left; vertical-align: top;"
                                                                      align="left" valign="top">
                                                                      <p
                                                                          style="Margin: 0; margin: 0; padding: 0; color: #333; font-family: Montserrat, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; font-size: 14px; font-weight: 400; -moz-hyphens: auto; -webkit-hyphens: auto; hyphens: auto; line-height: 1.57143; word-wrap: break-word; text-align: right;">
                                                                          <strong
                                                                              style="font-weight: 600;">----------Test
                                                                              Payment Provider</strong>
                                                                      </p>
                                                                  </th>
                                                              </tr>

                                                              <tr class="total__item"
                                                                  style="Margin: 0; margin: 0; padding: 0;">
                                                                  <th class="total__name"
                                                                      style="Margin: 0; margin: 0; padding: 0; border-collapse: collapse; padding-bottom: 4px; text-align: left; vertical-align: top;"
                                                                      align="left" valign="top">
                                                                      <p
                                                                          style="Margin: 0; margin: 0; padding: 0; color: #333; font-family: Montserrat, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; font-size: 14px; font-weight: 400; -moz-hyphens: auto; -webkit-hyphens: auto; hyphens: auto; line-height: 1.57143; word-wrap: break-word; text-align: right;">
                                                                          -----------Shipping method:</p>
                                                                  </th>

                                                                  <th class="total__value"
                                                                      style="Margin: 0; margin: 0; padding: 0; border-collapse: collapse; padding-bottom: 4px; padding-left: 15px; text-align: left; vertical-align: top;"
                                                                      align="left" valign="top">
                                                                      <p
                                                                          style="Margin: 0; margin: 0; padding: 0; color: #333; font-family: Montserrat, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; font-size: 14px; font-weight: 400; -moz-hyphens: auto; -webkit-hyphens: auto; hyphens: auto; line-height: 1.57143; word-wrap: break-word; text-align: right;">
                                                                          <strong
                                                                              style="font-weight: 600;">-------------Free
                                                                              Shipping</strong>
                                                                      </p>
                                                                  </th>
                                                              </tr>

                                                          </table>
                                                      </th>
                                                  </tr>
                                              </table>
                                          </th>

                                          <th class="expander"
                                              style="Margin: 0; margin: 0; border-collapse: collapse; visibility: hidden; width: 0; text-align: left; vertical-align: top; padding: 0 !important;"
                                              align="left" valign="top"></th>
                                      </tr>
                                  </table>
                              </th>
                          </tr>
                      </table>
                      <table class="row"
                          style="Margin: 0; margin: 0; padding: 0; border-collapse: collapse; border-spacing: 0; width: 100%;"
                          width="100%">
                          <tr style="Margin: 0; margin: 0; padding: 0;">
                              <th class="column"
                                  style="padding: 0; border-collapse: collapse; Margin: 0 auto; margin: 0 auto; width: 544px;"
                                  width="544">
                                  <table
                                      style="Margin: 0; margin: 0; padding: 0; border-collapse: collapse; border-spacing: 0; width: 100%;"
                                      width="100%">
                                      <tr style="Margin: 0; margin: 0; padding: 0;">
                                          <th style="Margin: 0; margin: 0; padding: 0; border-collapse: collapse; text-align: left; vertical-align: top;"
                                              align="left" valign="top">
                                              <table class="addresses"
                                                  style="Margin: 0; margin: 0; padding: 0; border-collapse: collapse; border-spacing: 0; width: 100%;"
                                                  width="100%">
                                                  <tr style="Margin: 0; margin: 0; padding: 0;">
                                                      <th style="Margin: 0; margin: 0; padding: 0; border-collapse: collapse; text-align: left; vertical-align: top;"
                                                          align="left" valign="top">
                                                          <h2
                                                              style="Margin: 0 0 4px; color: #333; font-family: Montserrat, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; font-size: 21px; font-weight: 500; -moz-hyphens: auto; -webkit-hyphens: auto; hyphens: auto; line-height: 1.57143; margin: 0 0 4px; word-wrap: break-word;">
                                                              -------------Billing Address</h2>

                                                          <div class="addresses__content"
                                                              style="padding: 0; Margin: 0; color: #333; font-family: Montserrat, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; font-size: 14px; font-weight: 400; -moz-hyphens: auto; -webkit-hyphens: auto; hyphens: auto; line-height: 1.57143; text-transform: uppercase; margin: 0; word-wrap: break-word; border-top: 1px solid #e5e5e5; padding-top: 12px;">
                                                              <strong class="addresses__name"
                                                                  style="font-weight: 600; text-transform: none;">
                                                                  ------------mugish
                                                                  beldar
                                                              </strong>

                                                              <br>

                                                              -----------abc pvt ltd

                                                              <br>

                                                              -------------Akshya Nagar 1st Block 1st Cross,
                                                              Rammurthy
                                                              nagar<br>defg

                                                              <br>

                                                              --------------Ahmedabad,
                                                              Gujarat
                                                              380001

                                                              <br>

                                                              ---------------India

                                                              <br>

                                                              ----------------1234567890

                                                          </div>
                                                      </th>
                                                  </tr>
                                              </table>
                                          </th>

                                          <th class="expander"
                                              style="Margin: 0; margin: 0; border-collapse: collapse; visibility: hidden; width: 0; text-align: left; vertical-align: top; padding: 0 !important;"
                                              align="left" valign="top"></th>
                                      </tr>
                                  </table>
                              </th>
                          </tr>
                      </table>
                  </td>
              </tr>
          </table>

          <table class="spacer spacer--40"
              style="Margin: 0; margin: 0; padding: 0; border-collapse: collapse; border-spacing: 0; width: 100%;"
              width="100%">
              <tr style="Margin: 0; margin: 0; padding: 0;">
                  <td style="Margin: 0; margin: 0; padding: 0; border-collapse: collapse; font-size: 40px; height: 40px; line-height: 40px;"
                      height="40">&nbsp;</td>
              </tr>
          </table>

          <table class="spacer spacer--16"
              style="Margin: 0; margin: 0; padding: 0; border-collapse: collapse; border-spacing: 0; width: 100%;"
              width="100%">
              <tr style="Margin: 0; margin: 0; padding: 0;">
                  <td style="Margin: 0; margin: 0; padding: 0; border-collapse: collapse; font-size: 16px; height: 16px; line-height: 16px;"
                      height="16">&nbsp;</td>
              </tr>
          </table>
      </td>
  </tr>
</table>

<!-- prevent Gmail on iOS font size manipulation -->
<div
  style="Margin: 0; margin: 0; padding: 0; display: none; white-space: nowrap; font: 15px courier; line-height: 0;">
  &nbsp;
  &nbsp;
  &nbsp;
  &nbsp;
  &nbsp;
  &nbsp;
  &nbsp;
  &nbsp;
  &nbsp;
  &nbsp;
  &nbsp;
  &nbsp;
  &nbsp;
  &nbsp;
  &nbsp;
  &nbsp;
  &nbsp;
  &nbsp;
  &nbsp;
  &nbsp;
  &nbsp;
  &nbsp;
  &nbsp;
  &nbsp;
  &nbsp;
  &nbsp;
  &nbsp;
  &nbsp;
  &nbsp;
  &nbsp;
</div>`,
  attachments: [
    {
      filename: "-6228836996483232632_121.jpg",
      path: "/home/ad.rapidops.com/mugish.beldar/Git-Repository/Mugish-Beldar/email-client-using-oauth/src/attachments-files/-6228836996483232632_121.jpg",
      cid: "logo-image",
    },
    {
      filename: "week 3 .pdf",
      path: "/home/ad.rapidops.com/mugish.beldar/Git-Repository/Mugish-Beldar/email-client-using-oauth/src/attachments-files/week 3 .pdf",
    },
  ],
};
// const messageOption = {
//   to: 'mugishbeldar333@gmail.com',
//   subject: 'Example email with plain text body',
//   text: 'This is an example email message with a plain text body'
// };

// send the email message using the transport object
transport.sendMail(messageOption, (error, info) => {
  if (error) {
    console.error(error);
  } else {
    console.log(`Email sent: ${info}`);
  }
});
