define(['./chain/at', './chain/chain', './chain/commit', './chain/flatMap', './chain/lodash', './chain/next', './chain/plant', './chain/reverse', './chain/run', './chain/tap', './chain/thru', './chain/toIterator', './chain/toJSON', './chain/value', './chain/valueOf', './chain/wrapperChain'], function(at, chain, commit, flatMap, lodash, next, plant, reverse, run, tap, thru, toIterator, toJSON, value, valueOf, wrapperChain) {
  return {
    'at': at,
    'chain': chain,
    'commit': commit,
    'flatMap': flatMap,
    'lodash': lodash,
    'next': next,
    'plant': plant,
    'reverse': reverse,
    'run': run,
    'tap': tap,
    'thru': thru,
    'toIterator': toIterator,
    'toJSON': toJSON,
    'value': value,
    'valueOf': valueOf,
    'wrapperChain': wrapperChain
  };
});
