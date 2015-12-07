define(['../internal/arrayEach', '../internal/baseFlatten', './bind', './rest'], function(arrayEach, baseFlatten, bind, rest) {

  /**
   * Binds methods of an object to the object itself, overwriting the existing
   * method.
   *
   * **Note:** This method doesn't set the "length" property of bound functions.
   *
   * @static
   * @memberOf _
   * @category Function
   * @param {Object} object The object to bind and assign the bound methods to.
   * @param {...(string|string[])} methodNames The object method names to bind,
   *  specified individually or in arrays.
   * @returns {Object} Returns `object`.
   * @example
   *
   * var view = {
   *   'label': 'docs',
   *   'onClick': function() {
   *     console.log('clicked ' + this.label);
   *   }
   * };
   *
   * _.bindAll(view, 'onClick');
   * jQuery('#docs').on('click', view.onClick);
   * // => logs 'clicked docs' when the element is clicked
   */
  var bindAll = rest(function(object, methodNames) {
    arrayEach(baseFlatten(methodNames), function(key) {
      object[key] = bind(object[key], object);
    });
    return object;
  });

  return bindAll;
});
