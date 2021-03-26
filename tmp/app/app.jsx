var ReactDOM = require('react-dom');
var React = require('react');
var ItemsList = require('./components/ItemsList.jsx');
 
const propsValues = {
    title: "Цены ==> Игры для ПК | Игры для консолей | Комплектующие",
    items1: [
        "Samsung Galaxy Note20", 
        "Apple iPhone 12 Pro", 
        "Google Pixel 5", 
        "Huawei P40 Pro", 
        "OnePlus 8 Pro", 
        "Asus Zenfone 7 Pro"
    ],
    items2: [
        "Apple iPhone 8", 
        "Apple iPhone 9", 
        "Apple iPhone X", 
        "Apple iPhone 11", 
        "Apple iPhone 12 Pro", 
    ],
    items3: [
        [
          "http://store.steampowered.com/favicon.ico",
          "Steam",
          "http://store.steampowered.com/",
          "http://store.steampowered.com/search/?snr=1_7_7_151_12&term="
        ],
        [
          "https://steamdb.info/favicon.ico",
          "SteamDB",
          "https://steamdb.info/",
          "https://steamdb.info/search/?a=app&q="
        ],   
        [
          "https://psprices.com/staticfiles/i/icons/favicon_32.b1522b291cd7.png",
          "psprices.com",
          "https://psprices.com/region-ru/index",
          "https://psprices.com/region-ru/search/?platform=&dlc=show&q="
        ],
        [
          "https://www.origin.com/favicon.ico",
          "Origin",
          "https://www.origin.com/rus/ru-ru/store",
          "https://www.origin.com/rus/ru-ru/search?searchString="
        ],
        [
          "https://eu.shop.battle.net/favicon.ico",
          "battle.net",
          "https://eu.shop.battle.net/ru-ru",
          ""
        ],
        [
          "http://store.ubi.com/favicon.ico",
          "Ubisoft Store",
          "http://store.ubi.com/ru",
          "http://store.ubi.com/ru/search?q="
        ],
        [
          "https://www.microsoft.com/favicon.ico",
          "Microsoft Store",
          "https://www.microsoft.com/ru-ru/store/games/windows",
          "https://www.microsoft.com/ru-ru/search/result.aspx?form=apps&search=&q="
        ],
        [
          "https://www.gog.com/favicon.ico",
          "gog com",
          "https://www.gog.com/",
          "https://www.gog.com/games?sort=bestselling&page=1&search="
        ],
        [
          "https://static-assets-prod.epicgames.com/epic-store/static/webpack/../favicon.ico",
          "Epic Games Store",
          "https://www.epicgames.com/store/ru/",
          "https://www.epicgames.com/store/ru/store-search?q="
        ],
        [
          "https://www.g2a.com/favicon.ico",
          "G2A",
          "https://www.g2a.com/",
          "https://www.g2a.com/?search="
        ],
        [
          "https://plati.ru/favicon.png",
          "plati.ru",
          "https://plati.ru/",
          "https://plati.ru/search/"
        ],
        [
          "https://ru.gamersgate.com/favicon.ico",
          "GAMERSGATE",
          "https://ru.gamersgate.com/",
          "https://ru.gamersgate.com/games?prio=relevance&q="
        ],
        [
          "http://roxen.ru/bitrix/templates/game/favicon.ico",
          "roxen.ru",
          "http://roxen.ru/",
          "http://roxen.ru/games/index.php?&ser="
        ],
        [
          "https://www.1c-interes.ru/images/favicon.ico",
          "1С Интерес",
          "https://www.1c-interes.ru/",
          "https://www.1c-interes.ru/search/index.php?s=Search&q="
        ],
        [
          "http://muve.softclub.ru/favicon.ico",
          "СофтКлаб MUVE",
          "http://muve.softclub.ru/",
          "http://muve.softclub.ru/pages/search?query="
        ],
        [
          "http://buka.ru/favicon.ico",
          "Бука",
          "http://shop.buka.ru/",
          ""
        ],
        [
          "https://www.igromagaz.ru/favicon.ico",
          "ИгроМагаз.ру",
          "https://www.igromagaz.ru/",
          "https://www.igromagaz.ru/search/?q="
        ],
        [
          "http://zaka-zaka.com/favicon.ico",
          "ZAKA-ZAKA",
          "http://zaka-zaka.com/",
          "http://zaka-zaka.com/search/?game="
        ],
        [
          "http://s.gama-gama.ru/style/gama-gama/img/favicon.ico",
          "GAMA-GAMA.RU",
          "http://gama-gama.ru/",
          "http://gama-gama.ru/search/?searchField="
        ],
        [
          "https://gabestore.ru/favicon/favicon-32x32.png",
          "GABE STORE",
          "https://gabestore.ru/",
          "https://gabestore.ru/catalog?ProductFilter[search]="
        ],
        [
          "http://steambuy.com/favicon.ico",
          "STEAM BUY",
          "http://steambuy.com/",
          "http://steambuy.com/catalogue.php?q="
        ],
        [
          "https://playo.ru/favicon.ico",
          "PLAYO",
          "https://playo.ru/",
          "https://playo.ru/search/"
        ],
        [
          "https://yuplay.ru/img/img/favicon.ico",
          "YU PLAY",
          "https://yuplay.ru/",
          "https://yuplay.ru/products/search/?query="
        ],
        [
          "http://lozman-games.ru/favicon.ico",
          "ЛОЦМАН",
          "http://lozman-games.ru/catalog/digital-games/",
          "http://lozman-games.ru/search/?q="
        ],
        [
          "http://www.gzstore.ru/favicon.ico",
          "GAMEZONE",
          "http://www.gzstore.ru/",
          "http://www.gzstore.ru/search/?q="
        ],
        [
          "http://www.gamepark.ru/favicon.ico",
          "GamePark",
          "http://www.gamepark.ru/pc/games/",
          "http://www.gamepark.ru/search/?q="
        ],
        [
          "http://www.eldorado.ru/favicon.ico",
          "Эльдорадо",
          "http://www.eldorado.ru/cat/1773456/281308664/",
          "http://www.eldorado.ru/search/catalog.php?q="
        ],
        [
          "http://www.mvideo.ru/favicon.ico",
          "МВидео",
          "http://www.mvideo.ru/pc-igry-i-soft/pc-igry-91",
          "http://www.mvideo.ru/product-list-page?region_id=1&limit=12&q="
        ],
        [
          "https://good-steam.ru/favicon.ico",
          "good-steam",
          "https://good-steam.ru/catalog/",
          ""
        ],
        [
          "https://cdns.kinguin.net/media/favicon/stores/1/favicon.png",
          "kinguin.net",
          "https://www.kinguin.net/",
          "https://www.kinguin.net/catalogsearch/result/index/?q="
        ],
        [
          "http://www.grabthegames.com/assets/images/favicon.ico",
          "GrabTheGames",
          "http://www.grabthegames.com/deals-tracker.html",
          "http://www.grabthegames.com/deals-tracker.html?sort=dealrating&q="
        ],  
        [
          "https://www.greenmangaming.com/static/favicon.ico",
          "green man gaming",
          "https://www.greenmangaming.com/",
          "https://www.greenmangaming.com/search/"
        ], 
        [
          "dailyindiegame.png",
          "DailyIndieGame",
          "https://www.dailyindiegame.com/",
          "https://www.dailyindiegame.com/site_list_search.html?search="
        ],  
        [
          "https://cdn.fanatical.com/production/icons/favicon-32x32.png",
          "Fanatical",
          "https://www.fanatical.com/",
          "https://www.fanatical.com/en/search?search="
        ], 
        [
          "https://humblebundle-a.akamaihd.net/static/hashed/47e474eed38083df699b7dfd8d29d575e3398f1e.ico",
          "Humble Bundle",
          "https://www.humblebundle.com/",
          "https://www.humblebundle.com/store/search?sort=bestselling&search="
        ],  
        [
          "https://www.hrkgame.com/allstaticfiles/images/icon.png",
          "HRK Game",
          "https://www.hrkgame.com/en/",
          "https://www.hrkgame.com/en/games/products/?search="
        ],  
        [
          "https://www.indiegala.com/favicon.ico?v=d",
          "Indiegala",
          "https://www.indiegala.com/",
          "https://www.indiegala.com/store/search?type=games&page=1&key="
        ],  
        [
          "gamesmailru_cr.png",
          "игры@mail.ru",
          "https://games.mail.ru/play/download/",
          "https://games.mail.ru/play/download/?search="
        ],
        [
          "https://vgtimes.ru/img/apple-touch-icon-72x72b.png",
          "VGTimes",
          "https://vgtimes.ru/",
          ""
        ],
        [
          "http://nd.ru/favicon.ico",
          "Новый Диск",
          "http://nd.ru/",
          ""
        ],
    
        [
          "https://gamefarm.ru/wp-content/uploads/2017/04/logo-72.png",
          "GAMEFARM",
          "https://gamefarm.ru/",
          "https://gamefarm.ru/?s="
        ],
        [
          "https://gamerz.online/favicon-32x32.png",
          "GamerZ",
          "https://gamerz.online/",
          "https://gamerz.online/#!digiseller/search?s="
        ],
        [
          "https://www.allkeyshop.com/blog/wp-content/themes/aks-theme/assets/image/favicon-32x32.png",
          "allkeyshop",
          "https://www.allkeyshop.com/blog/daily-deals/",
          "https://www.allkeyshop.com/blog/catalogue/search-"
        ],
    
        [
          "",
          "Купить игру точка РУ",
          "http://kupit-igru.ru/",
          "http://kupit-igru.ru/advanced_search_result.php?x=0&y=0&keywords="
        ]
    ]        
};
 
ReactDOM.render(
    <ItemsList data={propsValues} />,
    document.getElementById("app")
)