const chalk = require('chalk')
const fs = require('fs')

global.allmenu = (prefix, hituet) => {
return`🅞 = For Owner
🅖 = For Group
🅕 = For Free User
🅟 = For Premium User

╭──❰ Group Menu 』
│𖡛grouplink 🅖
│𖡛invite 🅖
│𖡛setname 🅖
│𖡛setdesc 🅖
│𖡛add 🅖
│𖡛kick 🅖
│𖡛hidetag 🅖
│𖡛totag 🅖
│𖡛tagall 🅖
│𖡛antivirus 🅖
│𖡛nsfw 🅖
│𖡛react 🅖
╰────────────⦁

╭──❰ Download Menu 』
│𖡛play 🅕
│𖡛ytmp3 🅕
│𖡛ytmp4 🅕
│𖡛google 🅕
│𖡛instaimg 🅕
│𖡛instavid 🅕
│𖡛fbvid 🅕
│𖡛twittervid 🅕
│𖡛telestick 🅟
│𖡛spotify 🅟
│𖡛happymod 🅕
│𖡛gdrive 🅕
│𖡛pinterest 🅕
│𖡛ringtone 🅕
╰────────────⦁

╭──❰ Stalker 』
│𖡛igstalk 🅕
│𖡛mlstalk 🅕
╰────────────⦁

╭──❰ Anime 』
│𖡛anime 🅕
╰────────────⦁

╭──❰ Anime NSFW 』
│𖡛hentai 🅕
│𖡛gifhentai 🅕
│𖡛gifblowjob 🅕
│𖡛hentaivid 🅕
│𖡛hneko 🅕
│𖡛nwaifu 🅕
│𖡛animespank 🅕
│𖡛trap 🅕
│𖡛gasm 🅕
│𖡛ahegao 🅕
│𖡛ass 🅕
│𖡛bdsm 🅕
│𖡛blowjob 🅕
│𖡛cuckold 🅕
│𖡛cum 🅕
│𖡛milf 🅕
│𖡛eba 🅕
│𖡛ero 🅕
│𖡛femdom 🅕
│𖡛foot 🅕
│𖡛gangbang 🅕
│𖡛glasses 🅕
│𖡛jahy 🅕
│𖡛masturbation 🅕
│𖡛manga 🅕
│𖡛neko-hentai 🅕
│𖡛neko-hentai2 🅕
│𖡛nsfwloli 🅕
│𖡛orgy 🅕
│𖡛panties 🅕 
│𖡛pussy 🅕
│𖡛tentacles 🅕
│𖡛thighs 🅕
│𖡛yuri 🅕
│𖡛zettai 🅕
│𖡛xnxxsearch 🅟
│𖡛xnxxdl 🅟
╰────────────⦁

╭──❰ Textpro Maker 』
│𖡛candy 🅕 
│𖡛christmas 🅕 
│𖡛3dchristmas 🅕 
│𖡛sparklechristmas 🅕
│𖡛deepsea 🅕 
│𖡛scifi 🅕 
│𖡛rainbow 🅕 
│𖡛waterpipe 🅕 
│𖡛spooky 🅕 
│𖡛pencil 🅕 
│𖡛circuit 🅕 
│𖡛discovery 🅕 
│𖡛metalic 🅕 
│𖡛fiction 🅕 
│𖡛demon 🅕 
│𖡛transformer 🅕 
│𖡛berry 🅕 
│𖡛thunder 🅕 
│𖡛magma 🅕 
│𖡛3dstone 🅕 
│𖡛neonlight 🅕 
│𖡛glitch 🅕 
│𖡛harrypotter 🅕 
│𖡛brokenglass 🅕 
│𖡛papercut 🅕 
│𖡛watercolor 🅕 
│𖡛multicolor 🅕 
│𖡛neondevil 🅕 
│𖡛underwater 🅕 
│𖡛graffitibike 🅕
│𖡛snow 🅕 
│𖡛cloud 🅕 
│𖡛honey 🅕 
│𖡛ice 🅕 
│𖡛fruitjuice 🅕 
│𖡛biscuit 🅕 
│𖡛wood 🅕 
│𖡛chocolate 🅕 
│𖡛strawberry 🅕 
│𖡛matrix 🅕 
│𖡛blood 🅕 
│𖡛dropwater 🅕 
│𖡛toxic 🅕 
│𖡛lava 🅕 
│𖡛rock 🅕 
│𖡛bloodglas 🅕 
│𖡛hallowen 🅕 
│𖡛darkgold 🅕 
│𖡛joker 🅕 
│𖡛wicker 🅕
│𖡛firework 🅕 
│𖡛skeleton 🅕 
│𖡛blackpink 🅕 
│𖡛sand 🅕 
│𖡛glue 🅕 
│𖡛1917 🅕 
│𖡛leaves 🅕
│𖡛retro 🅕
│𖡛pornhub 🅕
│𖡛8bit 🅕
│𖡛batman 🅕
│𖡛3dbox 🅕
│𖡛lion 🅕
│𖡛3davengers 🅕
│𖡛window 🅕
│𖡛3dspace 🅕
│𖡛bokeh 🅕
│𖡛holographic 🅕
│𖡛thewall 🅕
│𖡛carbon 🅕
│𖡛whitebear 🅕
│𖡛metallic 🅕
│𖡛steel 🅕
│𖡛fabric 🅕
│𖡛ancient 🅕
│𖡛marvel 🅕
╰────────────⦁

╭──❰ PhotoOxy Maker 』
│𖡛shadow 🅕 
│𖡛write 🅕 
│𖡛romantic 🅕 
│𖡛burnpaper 🅕
│𖡛smoke 🅕 
│𖡛narutobanner 🅕 
│𖡛love 🅕 
│𖡛undergrass 🅕
│𖡛doublelove 🅕 
│𖡛coffecup 🅕
│𖡛underwaterocean 🅕
│𖡛smokyneon 🅕
│𖡛starstext 🅕
│𖡛rainboweffect 🅕
│𖡛balloontext 🅕
│𖡛metalliceffect 🅕
│𖡛embroiderytext 🅕
│𖡛flamingtext 🅕
│𖡛stonetext 🅕
│𖡛writeart 🅕
│𖡛summertext 🅕
│𖡛wolfmetaltext 🅕
│𖡛nature3dtext 🅕
│𖡛rosestext 🅕
│𖡛naturetypography 🅕
│𖡛quotesunder 🅕
│𖡛shinetext 🅕
╰────────────⦁

╭──❰ Ephoto360 Maker 』
│𖡛glitchtext 🅕
│𖡛writetext 🅕
│𖡛advancedglow 🅕
│𖡛typographytext 🅕
│𖡛pixelglitch 🅕
│𖡛neonglitch 🅕
│𖡛flagtext 🅕
│𖡛flag3dtext 🅕
│𖡛deletingtext 🅕
│𖡛blackpinkstyle 🅕
│𖡛glowingtext 🅕
│𖡛underwatertext 🅕
│𖡛logomaker 🅕
│𖡛cartoonstyle 🅕
│𖡛papercutstyle 🅕
│𖡛watercolortext 🅕
│𖡛effectclouds 🅕
│𖡛blackpinklogo 🅕
│𖡛gradienttext 🅕
│𖡛summerbeach 🅕
│𖡛luxurygold 🅕
│𖡛multicoloredneon 🅕
│𖡛sandsummer 🅕
│𖡛galaxywallpaper 🅕
│𖡛1917style 🅕
│𖡛makingneon 🅕
│𖡛royaltext 🅕
│𖡛freecreate 🅕
│𖡛galaxystyle 🅕
│𖡛lighteffects 🅕
╰────────────⦁


╭──❰ Other Menu 』
│𖡛tts 🅕
│𖡛say 🅕
│𖡛togif 🅕
│𖡛toqr 🅕
│𖡛bass 🅕
│𖡛blown 🅕
│𖡛deep 🅕
│𖡛earrape 🅕
│𖡛fast 🅕
│𖡛fat 🅕
│𖡛nightcore 🅕
│𖡛reverse 🅕
│𖡛robot 🅕
│𖡛slow 🅕
│𖡛smooth 🅕
│𖡛squirrel 🅕
│𖡛tinyurl 🅕
│𖡛tinyurl 🅕
│𖡛tovn 🅕
│𖡛toaudio 🅕
│𖡛tomp3 🅕
│𖡛tomp4🅕
│𖡛toimg 🅕
│𖡛toonce 🅕
│𖡛sticker 🅕
│𖡛take 🅟
│𖡛emoji 🅕
│𖡛volume 🅕
│𖡛ebinary 🅕
│𖡛dbinary 🅕
│𖡛ssweb 🅕
│𖡛quoted 🅕
│𖡛runtime 🅕
╰────────────⦁
`}

global.animemenu = (prefix) => {
return `🅞 = For Owner
🅖 = For Group
🅕 = For Free User
🅟 = For Premium User

╭──❰ Anime 』
│𖡛anime 🅕
╰────────────⦁
`}

global.ownermenu = (prefix) => {
return `🅞 = For Owner
🅖 = For Group
🅕 = For Free User
🅟 = For Premium User

╭──❰ Owner Menu 』
│𖡛self 🅞
│𖡛public 🅞
│𖡛join 🅞
│𖡛bctext 🅞
╰────────────⦁
`}

global.othermenu = (prefix) => {
return `🅞 = For Owner
🅖 = For Group
🅕 = For Free User
🅟 = For Premium User

╭──❰ Other Menu 』
│𖡛tts 🅕
│𖡛say 🅕
│𖡛togif 🅕
│𖡛toqr 🅕
│𖡛bass 🅕
│𖡛blown 🅕
│𖡛deep 🅕
│𖡛earrape 🅕
│𖡛fast 🅕
│𖡛fat 🅕
│𖡛nightcore 🅕
│𖡛reverse 🅕
│𖡛robot 🅕
│𖡛slow 🅕
│𖡛smooth 🅕
│𖡛squirrel 🅕
│𖡛tinyurl 🅕
│𖡛tinyurl 🅕
│𖡛tovn 🅕
│𖡛toaudio 🅕
│𖡛tomp3 🅕
│𖡛tomp4🅕
│𖡛toimg 🅕
│𖡛sticker 🅕
│𖡛emoji 🅕
│𖡛ebinary 🅕
│𖡛dbinary 🅕
│𖡛ssweb 🅕
│𖡛quoted 🅕
│𖡛runtime 🅕
│𖡛sound1 - sound161 🅕
╰────────────⦁
`}

global.downloadmenu = (prefix) => {
return `🅞 = For Owner
🅖 = For Group
🅕 = For Free User
🅟 = For Premium User

╭──❰ Download Menu 』
│𖡛play 🅕
│𖡛ytmp3 🅕
│𖡛ytmp4 🅕
│𖡛google 🅕
│𖡛instaimg 🅕
│𖡛instavid 🅕
│𖡛fbvid 🅕
│𖡛twittervid 🅕
│𖡛telestick 🅟
│𖡛spotify 🅟
│𖡛happymod 🅕
│𖡛gdrive 🅕
│𖡛pinterest 🅕
│𖡛ringtone 🅕
╰────────────⦁
`}

global.groupmenu = (prefix) => {
return `🅞 = For Owner
🅖 = For Group
🅕 = For Free User
🅟 = For Premium User

╭──❰ Group Menu 』
│𖡛grouplink 🅖
│𖡛invite 🅖
│𖡛setname 🅖
│𖡛setdesc 🅖
│𖡛add 🅖
│𖡛kick 🅖
│𖡛hidetag 🅖
│𖡛totag 🅖
│𖡛tagall 🅖
│𖡛antivirus 🅖
│𖡛nsfw 🅖
│𖡛react 🅖
╰────────────⦁
`}

global.stalkermenu = (prefix) => {
return `🅞 = For Owner
🅖 = For Group
🅕 = For Free User
🅟 = For Premium User

╭──❰ Stalker 』
│𖡛igstalk 🅕
│𖡛mlstalk 🅕
╰────────────⦁
`}

global.stickermenu = (prefix) => {
return `🅞 = For Owner
🅖 = For Group
🅕 = For Free User
🅟 = For Premium User

╭──❰ Sticker 』
│𖡛sticker 🅕
│𖡛s
╰────────────⦁
`}

global.aimenu = (prefix) => {
return `🅞 = For Owner
🅖 = For Group
🅕 = For Free User
🅟 = For Premium User

╭──❰ OpenAI 』
│𖡛remini 🅕
╰────────────⦁
`}

global.randphotomenu = (prefix) => {
return `🅞 = For Owner
🅖 = For Group
🅕 = For Free User
🅟 = For Premium User

global.textpromenu = (prefix) => {
return `🅞 = For Owner
🅖 = For Group
🅕 = For Free User
🅟 = For Premium User

╭──❰ Textpro Maker 』
│𖡛candy 🅕 
│𖡛christmas 🅕 
│𖡛3dchristmas 🅕 
│𖡛sparklechristmas 🅕
│𖡛deepsea 🅕 
│𖡛scifi 🅕 
│𖡛rainbow 🅕 
│𖡛waterpipe 🅕 
│𖡛spooky 🅕 
│𖡛pencil 🅕 
│𖡛circuit 🅕 
│𖡛discovery 🅕 
│𖡛metalic 🅕 
│𖡛fiction 🅕 
│𖡛demon 🅕 
│𖡛transformer 🅕 
│𖡛berry 🅕 
│𖡛thunder 🅕 
│𖡛magma 🅕 
│𖡛3dstone 🅕 
│𖡛neonlight 🅕 
│𖡛glitch 🅕 
│𖡛harrypotter 🅕 
│𖡛brokenglass 🅕 
│𖡛papercut 🅕 
│𖡛watercolor 🅕 
│𖡛multicolor 🅕 
│𖡛neondevil 🅕 
│𖡛underwater 🅕 
│𖡛graffitibike 🅕
│𖡛snow 🅕 
│𖡛cloud 🅕 
│𖡛honey 🅕 
│𖡛ice 🅕 
│𖡛fruitjuice 🅕 
│𖡛biscuit 🅕 
│𖡛wood 🅕 
│𖡛chocolate 🅕 
│𖡛strawberry 🅕 
│𖡛matrix 🅕 
│𖡛blood 🅕 
│𖡛dropwater 🅕 
│𖡛toxic 🅕 
│𖡛lava 🅕 
│𖡛rock 🅕 
│𖡛bloodglas 🅕 
│𖡛hallowen 🅕 
│𖡛darkgold 🅕 
│𖡛joker 🅕 
│𖡛wicker 🅕
│𖡛firework 🅕 
│𖡛skeleton 🅕 
│𖡛blackpink 🅕 
│𖡛sand 🅕 
│𖡛glue 🅕 
│𖡛1917 🅕 
│𖡛leaves 🅕
│𖡛retro 🅕
│𖡛pornhub 🅕
│𖡛8bit 🅕
│𖡛batman 🅕
│𖡛3dbox 🅕
│𖡛lion 🅕
│𖡛3davengers 🅕
│𖡛window 🅕
│𖡛3dspace 🅕
│𖡛bokeh 🅕
│𖡛holographic 🅕
│𖡛thewall 🅕
│𖡛carbon 🅕
│𖡛whitebear 🅕
│𖡛metallic 🅕
│𖡛steel 🅕
│𖡛fabric 🅕
│𖡛ancient 🅕
│𖡛marvel 🅕
╰────────────⦁
`}

global.photooxymenu = (prefix) => {
return `🅞 = For Owner
🅖 = For Group
🅕 = For Free User
🅟 = For Premium User

╭──❰ PhotoOxy Maker 』
│𖡛shadow 🅕 
│𖡛write 🅕 
│𖡛romantic 🅕 
│𖡛burnpaper 🅕
│𖡛smoke 🅕 
│𖡛narutobanner 🅕 
│𖡛love 🅕 
│𖡛undergrass 🅕
│𖡛doublelove 🅕 
│𖡛coffecup 🅕
│𖡛underwaterocean 🅕
│𖡛smokyneon 🅕
│𖡛starstext 🅕
│𖡛rainboweffect 🅕
│𖡛balloontext 🅕
│𖡛metalliceffect 🅕
│𖡛embroiderytext 🅕
│𖡛flamingtext 🅕
│𖡛stonetext 🅕
│𖡛writeart 🅕
│𖡛summertext ??
│𖡛wolfmetaltext 🅕
│𖡛nature3dtext 🅕
│𖡛rosestext 🅕
│𖡛naturetypography 🅕
│𖡛quotesunder 🅕
│𖡛shinetext 🅕
╰────────────⦁
`}

global.ephoto360menu = (prefix) => {
return `🅞 = For Owner
🅖 = For Group
🅕 = For Free User
🅟 = For Premium User

╭──❰ Ephoto360 Maker 』
│𖡛glitchtext 🅕
│𖡛writetext 🅕
│𖡛advancedglow 🅕
│𖡛typographytext 🅕
│𖡛pixelglitch 🅕
│𖡛neonglitch 🅕
│𖡛flagtext 🅕
│𖡛flag3dtext 🅕
│𖡛deletingtext 🅕
│𖡛blackpinkstyle 🅕
│𖡛glowingtext 🅕
│𖡛underwatertext 🅕
│𖡛logomaker 🅕
│𖡛cartoonstyle 🅕
│𖡛papercutstyle 🅕
│𖡛watercolortext 🅕
│𖡛effectclouds 🅕
│𖡛blackpinklogo 🅕
│𖡛gradienttext 🅕
│𖡛summerbeach 🅕
│𖡛luxurygold 🅕
│𖡛multicoloredneon 🅕
│𖡛sandsummer 🅕
│𖡛galaxywallpaper 🅕
│𖡛1917style 🅕
│𖡛makingneon 🅕
│𖡛royaltext 🅕
│𖡛freecreate 🅕
│𖡛galaxystyle 🅕
│𖡛lighteffects 🅕
╰────────────⦁
`}

global.nsfwmenu = (prefix) => {
return `🅞 = For Owner
🅖 = For Group
🅕 = For Free User
🅟 = For Premium User

╭──❰ Anime NSFW 』
│𖡛hentai 🅕
│𖡛gifhentai 🅕
│𖡛gifblowjob 🅕
│𖡛hentaivid 🅕
│𖡛hneko 🅕
│𖡛nwaifu 🅕
│𖡛animespank 🅕
│𖡛trap 🅕
│𖡛gasm 🅕
│𖡛ahegao 🅕
│𖡛ass 🅕
│𖡛bdsm 🅕
│𖡛blowjob 🅕
│𖡛cuckold 🅕
│𖡛cum 🅕
│𖡛milf 🅕
│𖡛eba 🅕
│𖡛ero 🅕
│𖡛femdom 🅕
│𖡛foot 🅕
│𖡛gangbang 🅕
│𖡛glasses 🅕
│𖡛jahy 🅕
│𖡛masturbation 🅕
│𖡛manga 🅕
│𖡛neko-hentai 🅕
│𖡛neko-hentai2 🅕
│𖡛nsfwloli 🅕
│𖡛orgy 🅕
│𖡛panties 🅕 
│𖡛pussy 🅕
│𖡛xnxxsearch 🅟
│𖡛xnxxdl 🅟
╰────────────⦁
`}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
