const chokidar = require('chokidar');

function getValueAndDependencies(requirePath) {
  const value = require(requirePath);
  const valueMod = module.children.find(mod => mod.id === requirePath);

  const deps = [];
  const stack = [valueMod];
  while (stack.length) {
    const child = stack.pop();
    deps.push(child.id);
    child.children.forEach(mod => stack.push(mod));
  }
  return { value, deps };
}

function requireAndWatch(requirePath, callback) {
  let dependencies = [],
    value;
  const watcher = chokidar.watch([]);
  watcher.on('ready', function() {
    watcher.on('change', function() {
      startWatch();
    });
  });

  function startWatch() {
    watcher.unwatch(dependencies);
    dependencies.forEach(dep => {
      delete require.cache[dep];
    });

    ({ value, deps: dependencies } = getValueAndDependencies(requirePath));

    watcher.add(dependencies);
    callback(value);
  }

  startWatch();
}

module.exports = requireAndWatch;
