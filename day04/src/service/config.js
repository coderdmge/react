const devBaseUrl = "https://www.httpbin.org"
const proBaseUrl = "http://www.jingdong.com"
const baseUrl = process.env.NODE_ENV === "development"? devBaseUrl: proBaseUrl
const timeout = 3000
export {
    baseUrl,
    timeout

}