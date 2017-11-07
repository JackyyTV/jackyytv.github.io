console.log('Detecting Status...');
$.getJSON('https://api.twitch.tv/kraken/streams/' + 'jacky1356400' + '?client_id=5ojgte4x1dp72yumoc8fp9xp44nhdj', function(data) {
    if (data.stream !== null) {
        var title = data.stream.channel.status;
        var game = data.stream.channel.game;
        $('.live-title').text(title);
        $('.live-game').text(game);
        $('.live-now').text('now LIVE!');
    } else {
        $('.live-now').text('offline.');
        $('.live-icon').remove();
    }
});
