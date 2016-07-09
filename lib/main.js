 // atom.config.set('my-package.my-setting', 'special value', scopeSelector: '.source.js .function.name')

CompositeDisposable = require('atom').CompositeDisposable;

console.log('loading todone');

module.exports = {
    subscriptions: null,
    activate: function() {
        console.log('todone activated');
        this.subscriptions = new CompositeDisposable();
        if (editor = atom.workspace.getActiveTextEditor()) {
            atom.config.set('editor.tabLength', 5, {scopeSelector: '.text.todone'});
            atom.config.set('editor.softWrapHangingIndent', 5, {scopeSelector: '.text.todone'});
            atom.config.set('editor.softWrap', true, {scopeSelector: '.text.todone'});
        }
    },

    deactivate: function() {
        this.subscriptions.dispose()
    }
}
