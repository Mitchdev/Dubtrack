dte-lite:
    Old script I was working on to kinda replace DubX, not being developed anymore.
    Probably will give you errors when try running it.

messageonmute:
    Simple script that inserts a message in chat when someone is muted. Making mutes not so silent.

propscmd:
    Introduces /props, which just sends a message from a customizable random list.
    Originally intended to mention the current DJ to prop they for the song.
    Only works in room chat (obviously).

##### Other scripts not here:

[_give dem emotes_](https://cloudy-netux.rhcloud.com/dubtrack/give-dem-emotes):
    Replaces named emotes (the ones inside `:these:`) with the actual image.
    Supports [TwitchTV](https://github.com/justintv/Twitch-API/blob/master/v2_resources/chat.md#get-chatemoticons), [Better TwitchTV](https://nightdev.com/betterttv/), [TastyCat](https://emotes.tastycat.org/) ([DubX GitHub Repository host)](https://github.com/sinfulBA/DubX-Script/blob/master/emotes/emotes.json)) and [FrankerFaceZ](https://www.frankerfacez.com/) ([BetterDiscord GitHub Repository host)](https://github.com/Jiiks/BetterDiscordApp/blob/master/data/emotedata_ffz.json))
    Works anywhere where emojis are replaced (`:D`, `;)`, etc)

[image replacer](https://cloudy-netux.rhcloud.com/dubtrack/image-replacer):
    Replaced a few named emotes (the ones inside `these`) with the actual image.
    The main difference with _give dem emotes_ is that this one replaces the image **before sending the message**, and with the actual link of the image whereas _give dem emotes_ replaces the text when receiving the message.
    Only works in room chat.

~~[RECMSG](https://cloudy-netux.rhcloud.com/dubtrack/RECMSG):~~ **REMOVED, Dubtrack now allows for deleted messages to be shown for mods**
    ~~Records every message sent in room chat and allows them to be shown after they are removed.
    Only works in room chat.~~

##### About `redub_emotes.json`
Planned to be used on _give dem emotes_ to add custom emotes not provided by any of the API's