define(['./arrayMap', './baseFlatten', './baseIteratee', './copyArray', '../function/rest'], function(arrayMap, baseFlatten, baseIteratee, copyArray, rest) {

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeMin = Math.min;

  /**
   * Creates a function like `_.modArgs`.
   *
   * @private
   * @param {Function} resolver The function to resolve which invocation
   *  arguments are provided to each transform.
   * @returns {Function} Returns the new arguments modifier function.
   */
  function createModArgs(resolver) {
    return rest(function(func, transforms) {
      transforms = arrayMap(baseFlatten(transforms), baseIteratee);

      var funcsLength = transforms.length;
      return rest(function(args) {
        var index = -1,
            length = nativeMin(args.length, funcsLength),
            modded = copyArray(args);

        while (++index < length) {
          modded[index] = transforms[index].apply(this, resolver(args[index], index, args));
        }
        return func.apply(this, modded);
      });
    });
  }

  return createModArgs;
});
