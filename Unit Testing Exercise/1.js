function requestValidator(request){
   const{method, uri, version, message} = request;
   const validMethods = [ 'GET', 'POST', 'DELETE', 'CONNECT'];
   const validVersions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1','HTTP/2.0' ];
   const uriPattern = /^([\w.])+$|^\*$/;
   const messagePattern = /^[^<>\\&\'\"]+$/;

   if(!validMethods.includes(method) || !method ){
     throw new Error('Invalid request header: Invalid method')
   }

   if(!validVersions.includes(version) || !version ){
    throw new Error('Invalid request header: Invalid version');
   }
  
   if(!uriPattern.exec(uri) || !uri ){
    throw new Error('Invalid request header: Invalid uri');
   }
  console.log(messagePattern.exec(message));
   if(!messagePattern.exec(message) || !message ){
    throw new Error('Invalid request header: Invalid message');
   }


    return request
}
requestValidator({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
  })