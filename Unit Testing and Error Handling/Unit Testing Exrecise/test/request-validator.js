function requestValidator(request) {

    const { method, uri, version, message } = request;
    const validMethods = ['GET', 'POST', 'DELETE', 'CONNECT'];
    const validVersion = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
    const uriPattern = /^([\w.])+$|^\*$/;
    const messagePattern = /[<>\&'"]/;//   /^[^<>\\&\'\"]+$/


    if (!validMethods.includes(method) || !method) {
        throw new Error('Invalid request header: Invalid Method');
    };

    if (!validVersion.includes(version) || !version) {
        throw new Error('Invalid request header: Invalid Version');
    };

    if (!uriPattern.exec(uri) || !uri) {
        throw new Error('Invalid request header: Invalid URI')
    }

    if ((messagePattern.exec(message) && message !== '') || message === undefined) {
        throw new Error('Invalid request header: Invalid Message')
    }

    return request
}
console.log(requestValidator({
  method: 'GET',
  uri: 'svn.public.catalog',
  version: 'HTTP/1.1',
  message: ''
}));