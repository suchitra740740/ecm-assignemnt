# media - backend
## Running Backend Localy

### install all the packages
```
npm run install
```

### run locally
```
npm run dev
```

On running this comand server will start on port :`8080`

### API documentation

```
curl --location --request GET 'http://localhost:8080/assignment-be/media'

```
Response

```json
{
    "message": "get media",
    "data": [
        {
            "id": 1,
            "title": {
                "romaji": "Cowboy Bebop",
                "english": "Cowboy Bebop",
                "native": "カウボーイビバップ"
            },
            "coverImage": {
                "extraLarge": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx1-CXtrrkMpJ8Zq.png",
                "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx1-CXtrrkMpJ8Zq.png",
                "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx1-CXtrrkMpJ8Zq.png",
                "color": "#f1785d"
            },
            "description": "Enter a world in the distant future, where Bounty Hunters roam the solar system. Spike and Jet, bounty hunting partners, set out on journeys in an ever struggling effort to win bounty rewards to survive.<br><br>\nWhile traveling, they meet up with other very interesting people. Could Faye, the beautiful and ridiculously poor gambler, Edward, the computer genius, and Ein, the engineered dog be a good addition to the group?"
        },
        {
            "id": 5,
            "title": {
                "romaji": "Cowboy Bebop: Tengoku no Tobira",
                "english": "Cowboy Bebop: The Movie - Knockin' on Heaven's Door",
                "native": "カウボーイビバップ天国の扉"
            },
            "coverImage": {
                "extraLarge": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx5-NozHwXWdNLCz.jpg",
                "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx5-NozHwXWdNLCz.jpg",
                "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx5-NozHwXWdNLCz.jpg",
                "color": "#f13500"
            },
            "description": "As the Cowboy Bebop crew travels the stars, they learn of the largest bounty yet, a huge 300 million Woolongs. Apparently, someone is wielding a hugely powerful chemical weapon, and of course the authorities are at a loss to stop it. The war to take down the most dangerous criminal yet forces the crew to face a true madman, with bare hope to succeed.\n<br><br>\n(Source: Anime News Network)"
        },
        {
            "id": 6,
            "title": {
                "romaji": "TRIGUN",
                "english": "Trigun",
                "native": "TRIGUN"
            },
            "coverImage": {
                "extraLarge": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx6-Zzun7PHNNgPt.jpg",
                "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx6-Zzun7PHNNgPt.jpg",
                "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx6-Zzun7PHNNgPt.jpg",
                "color": "#f1e4c9"
            },
            "description": "Vash the Stampede is a wanted man with a habit of turning entire towns into rubble. The price on his head is a fortune, and his path of destruction reaches across the arid wastelands of a desert planet. Unfortunately, most encounters with the spiky-haired gunslinger don't end well for the bounty hunters who catch up with him; someone almost always gets hurt - and it's never Vash.<br>\n<br>\nOddly enough, for such an infamous fugitive, there's no proof that he's ever taken a life. In fact, he's a pacifist with a doughnut obsession who's more doofus than desperado. There's a whole lot more to him than his reputation lets on - Vash the Stampede definitely ain't your typical outlaw.<br>\n<br>\n(Source: Funimation)"
        },
        {
            "id": 7,
            "title": {
                "romaji": "Witch Hunter ROBIN",
                "english": "Witch Hunter ROBIN",
                "native": "Witch Hunter ROBIN"
            },
            "coverImage": {
                "extraLarge": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx7-6uh1fPvbgS9t.png",
                "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx7-6uh1fPvbgS9t.png",
                "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx7-6uh1fPvbgS9t.png",
                "color": "#e4935d"
            },
            "description": "Robin Sena is a powerful craft user drafted into the STNJ - a group of specialized hunters that fight deadly beings known as Witches. Though her fire power is great, she’s got a lot to learn about her powers and working with her cool and aloof partner, Amon. But the truth about the Witches and herself will leave Robin on an entirely new path that she never expected!<br>\n<br>\n(Source: Funimation)"
        },
        {
            "id": 8,
            "title": {
                "romaji": "Bouken Ou Beet",
                "english": "Beet the Vandel Buster",
                "native": "冒険王ビィト"
            },
            "coverImage": {
                "extraLarge": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/b8-ReS3TwSgrDDi.jpg",
                "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/b8-ReS3TwSgrDDi.jpg",
                "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/b8-ReS3TwSgrDDi.jpg",
                "color": "#e46b50"
            },
            "description": "It is the dark century and the people are suffering under the rule of the devil, Vandel, who is able to manipulate monsters. The Vandel Busters are a group of people who hunt these devils, and among them, the Zenon Squad is known to be the strongest busters on the continent. A young boy, Beet, dreams of joining the Zenon Squad. However, one day, as a result of Beet's fault, the Zenon squad was defeated by the devil, Beltose. The five dying busters sacrificed their life power into their five weapons, Saiga. After giving their weapons to Beet, they passed away. Years have passed since then and the young Vandel Buster, Beet, begins his adventure to carry out the Zenon Squad's will to put an end to the dark century. "
        },
        {
            "id": 15,
            "title": {
                "romaji": "Eyeshield 21",
                "english": "Eyeshield 21",
                "native": "アイシールド21"
            },
            "coverImage": {
                "extraLarge": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx15-A4F2t0TgWoi4.png",
                "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx15-A4F2t0TgWoi4.png",
                "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx15-A4F2t0TgWoi4.png",
                "color": "#d6bb1a"
            },
            "description": "Welcome To the Gridiron of the Damned!   Huge hulking bodies throw themselves at each other, while a tiny lithe body runs between them for the goal!  No, it&rsquo;s not a game of football, it&rsquo;s Sena Kobayakawa trying to evade the monstrous Ha-Ha brothers down the halls of Deimon High School!  But wait!  Sena&rsquo;s incredible skills at not getting caught have been spotted by the devilish (possibly actually demonic) captain of the school&rsquo;s embryonic American style football team, and when Sena asks to be the teams manager, he gets  thrust onto the field as a running back instead!  But there are two BIG catches: first, to keep the identity of their new &ldquo;star&rdquo; player an absolute secret, Yoichi makes Sena wear an opaque visor on his helmet and gives him the alias of &ldquo;Eyeshield 21.&rdquo;  And the second catch?  Well, in order to hit his fastest &ldquo;speed of light&rdquo; running mode, Sena usually has to be absolutely terrified. Not that THAT will be a problem with the monstrous players that he&rsquo;ll soon find himself running from!  The insanity hits the streets when the feet meet the cleats in EYESHIELD 21! <br><br>\n(Source: Sentai Filmworks)"
        },
        {
            "id": 16,
            "title": {
                "romaji": "Hachimitsu to Clover",
                "english": "Honey and Clover",
                "native": "ハチミツとクローバー"
            },
            "coverImage": {
                "extraLarge": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx16-5fJZ2Sy2ThRA.jpg",
                "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx16-5fJZ2Sy2ThRA.jpg",
                "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx16-5fJZ2Sy2ThRA.jpg",
                "color": "#aee486"
            },
            "description": "Takemoto Yuuta, Mayama Takumi, and Morita Shinobu are college students who share the small apartment. Even though they live in poverty, the three of them are able to obtain pleasure through small things in life. The story follows these characters' life stories as poor college students, as well as their love lives when a short but talented 18 year old girl called Hanamoto Hagumi appears.\n<br><br>\n(Source: Anime News Network)"
        },
        {
            "id": 17,
            "title": {
                "romaji": "Hungry Heart: Wild Striker",
                "english": null,
                "native": "ハングリーハート Wild Striker"
            },
            "coverImage": {
                "extraLarge": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx17-6kqIbdUk3dgi.png",
                "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx17-6kqIbdUk3dgi.png",
                "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx17-6kqIbdUk3dgi.png",
                "color": "#43aee4"
            },
            "description": "Kyosuke Kano has lived under the shadow of his successful brother Seisuke all his life who is a professional soccer player. Tired of being compared and downgraded at, he abandoned playing soccer until a boy from his new highschool discovered him and asked him to join their team. Kyosuke joins it and befriends two other first year players named Rodrigo and Sakai with the dream of becomming professional soccer players themselves.\n<br><br>\n(Source: Anime News Network)"
        },
        {
            "id": 18,
            "title": {
                "romaji": "Initial D FOURTH STAGE",
                "english": "Initial D 4th Stage",
                "native": "頭文字〈イニシャル〉D FOURTH STAGE"
            },
            "coverImage": {
                "extraLarge": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/b18-r7IirVmwP89u.jpg",
                "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/b18-r7IirVmwP89u.jpg",
                "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/b18-r7IirVmwP89u.jpg",
                "color": "#e46b50"
            },
            "description": "Takumi Fujiwara and brothers Keisuke and Ryousuke Takahashi have formed \"Project D,\" a racing team aimed at bringing their driving skills to their full potential outside their prefecture. Using the internet, Project D issues challenges to other racing teams and posts results of their races. Managed by Ryousuke, the team has Takumi engaging in downhill battles with his AE86, while Keisuke challenges opponents uphill. Among their rivals are the Seven-Star Leaf (SSR) and Todo-juku."
        },
        {
            "id": 19,
            "title": {
                "romaji": "MONSTER",
                "english": "Monster",
                "native": "MONSTER"
            },
            "coverImage": {
                "extraLarge": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx19-ham53gnijfiN.jpg",
                "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx19-ham53gnijfiN.jpg",
                "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx19-ham53gnijfiN.jpg",
                "color": null
            },
            "description": "Dr. Kenzo Tenma is a renowned Japanese brain surgeon working at a leading hospital in Germany. One night, Dr. Tenma risks his reputation and career to save the life of a critically wounded young boy over that of the town mayor who had been planning to support the hospital financially. A string of mysterious murders begin to occur soon after the operation, and Dr. Tenma emerges as the primary suspect despite no incriminating evidence. \n<br><br>\nA doctor is taught to believe that all life is equal; however, when another series of murders occur in the surgeon's vicinity, Dr. Tenma's beliefs are shaken as his actions that night are shown to have much broader consequences than he could have imagined. Leaving behind his life as a surgeon he embarks on a journey across the country to unravel the mystery of the boy he saved."
        }
    ],
    "toastContext": {},
    "requestId": "ff4b73c6-f3ca-40c1-a966-105d33476419"
}
```