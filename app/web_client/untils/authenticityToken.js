const authenticityToken = () => document.querySelector("meta[name='csrf-token']").getAttribute("content")

export default authenticityToken;