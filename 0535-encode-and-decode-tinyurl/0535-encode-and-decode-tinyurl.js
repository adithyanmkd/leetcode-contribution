/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */

const baseUrl = "http://tinyurl.com/"
const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

const hashFunction = (value) => {
    let hash = ""

    for (let i = 0; i < 8; i++) {
        hash += characters[value.charCodeAt(i) % characters.length]
    }

    return hash
}

const map = new Map()
var encode = function(longUrl) {
    const code = hashFunction(longUrl)
    const tinyUrl = `${baseUrl}${code}`
    map.set(tinyUrl, longUrl)

    return tinyUrl
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function(shortUrl) {
    return map.get(shortUrl)
};

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */