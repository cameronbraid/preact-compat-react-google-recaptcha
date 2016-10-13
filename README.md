# preact-compat-react-google-recaptcha
Demonstration of an issue with react-google-recaptcha when using preact and preact-compat

This demonstrates two issues :

a) the async loading of the recaptcha script takes a long time.  There is a cancelled attempt to download https://www.google.com/recaptcha/api2/anchor?... then on the second attempt it succeeds and the recaptcha box is snowhn

b) once the captcha box is shown, any calls to setState causes the recaptcha box to dissapear - try entering something into the textbox, or complete the captcha

