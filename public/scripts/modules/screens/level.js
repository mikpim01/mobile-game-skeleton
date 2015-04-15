'use strict';

if (!MODULE) { var MODULE = {}; }

MODULE.LevelScreen = (function() {
    var LevelScreen = function() {
        this.$screen = $('#screen-level');
        this.$level = this.$screen.find('.level');
        this.$footer = this.$screen.find('footer');

        this.$buttons = {
            play: this.$footer.find('button.play'),
            clear: this.$footer.find('button.clear'),
            help: this.$footer.find('button.help'),
            library: this.$footer.find('button.library'),
            exit: this.$footer.find('button.exit')
        };

        this.$buttons.exit.on('click', function() {
            app.screens.campaign.display();
        });

        this.level = null;
        this.level_id = null;
    };

    LevelScreen.prototype.display = function(level_id) {
        $('#screens > .screen').hide();

        this.level_id = level_id;

        this.level = new MODULE.Level(level_id);

        this.$screen.show();

        app.analytics.track('SCREEN-SETTINGS');
    };

    return LevelScreen;
}());