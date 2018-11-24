const myvar = require('./test.json');
const Discord = require('discord.js')

function createEmbed(title, description = '', fields = [], options = {}){
    let url = options.url || '';
    let color = options.color || '7289DA';

    if (options.inline) {
        if (fields.length % 3 === 2) {
            fields.push({ name: '\u200b', value: '\u200b' });
        }
        fields.forEach(obj => {
            obj.inline = true;
        });
    }

    return new Discord.RichEmbed({ fields, video: options.video || url })
        .setTitle(title)
        .setColor(color)
        .setDescription(description)
        .setImage(options.image)
        .setFooter(options.time + " seconds")
}

let action = "actionname"

module.exports.run = (client,message) => {
    message.channel.send(createEmbed(myvar[action].latest,
                                     '',
                                     [{
                                         "name": myvar[action].transcript,
                                         "value": myvar[action].text
                                     }],
                                     {
                                        image: myvar[action].image
                                     }
                                    ))
}