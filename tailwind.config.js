/** @type {import('tailwindcss').Config} */


module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      screens:{
        "sm-xxs": "40px",
        "sm-xs" : "250px",
        "sm-button":"328px",
        "sm-s": "400px",
        "sm-xl":"768px",
        "lg-1": '1204px'
      },
      backgroundImage:(theme)=>({
        "nth-100":"url(https://edge.rode.com/images/page/1/modules/5873/rode-nth100-lifestyle-insitu-female-looking-down-grey-1920x700-rgb.jpg)",

        "nt-usb":"url(https://edge.rode.com/images/page/1/modules/5914/rode-nt-usb-webheader-v7-1920x700-rgb.jpg)",

        "pod-mic":"url(https://edge.rode.com/images/page/1/modules/1508/rode-podmic-webheader-1920x700-rgb.jpg)",

        "wireless-go-II":"url(https://edge.rode.com/images/page/1/modules/314/WIGOII-WEBHEADER-02.jpg)",

        "nt-usb-mini":"url(https://edge.rode.com/images/page/1/modules/5303/rode-nt-usb-mini-webheader-1920x700-rgb.jpg)",

        "explore-01":"url(https://edge.rode.com/images%2Fpage%2F1%2Fmodules%2F5357%2Fmicrophones-module-1200x300-rgb.png)",

        "explore-02":"url(https://rode.com/assets/images%2Fpage%2F1%2Fmodules%2F5359%2Finterfaces-module-2022-1200x300-rgb.jpg)",

        "explore-03":"url(https://edge.rode.com/images%2Fpage%2F1%2Fmodules%2F5361%2Fsoftware-module-2021-1200x300-rgb.png)",

        "explore-04":"url(https://edge.rode.com/images%2Fpage%2F1%2Fmodules%2F5370%2Faccessories-module-2021-1200x300-rgb.png)"
      }),
      backgroundPosition:(theme)=>({
        "nth-100":"center",
        "nt-usb":"center",
        "pod-mic":"center",
        "wireless-go-II":"center",
        "nt-usb-mini":"center",
        "explore-01":"center",
        "explore-02":"center",
        "explore-03":"center",
        "explore-04":"center"
      }),
      
    },
  },
  plugins: [],
}
