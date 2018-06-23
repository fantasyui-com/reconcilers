module.exports = function(options, reconcilers={}){

  // NOTE: it may be best to provide a list of reconcilers as they may be on npm and local
  // there will exist several in this repository and that will be taken care of via Object.assign.

  return function(reconciler){
    reconcilers[reconciler];
  }

}
