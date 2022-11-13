const themes = {
    dark: {
        background: '#000000',
        font: '#ffffff',
        hover: '#cfcece',
        imgBackground: '#ffffff',
        border: '#000000'
    },
    light: {
        background: '#ffffff',
        font: '#000000',
        hover: '#cfcece',
        imgBackground: '#ffffff',
        border: '#000000'
    },
    pink: {
        background: '#ff00ff',
        font: '#000000',
        hover: '#800080',
        imgBackground: '#ff00ff',
        border: '#800080'
    },
    blue: {
        background: '#bbdefb',
        font: '#000000',
        hover: '#008cff',
        imgBackground: '#bbdefb',
        border: '#000000'
    },
    yellow: {
        background: '#f7ee8e',
        font: '#000000',
        hover: '#e47200',
        imgBackground: '#f7ee8e',
        border: '#000000'
    },
    green: {
        background: '#b3cf99',
        font: '#000000',
        hover: '#658354',
        imgBackground: '#b3cf99',
        border: '#000000'
    },
    changeTheme: function(themeId){
        let root = document.querySelector(':root');
        root.style.setProperty('--bgclr', this[themeId].background);
        root.style.setProperty('--fntclr', this[themeId].font);
        root.style.setProperty('--hvrclr', this[themeId].hover);
        root.style.setProperty('--imgbkgclr', this[themeId].imgBackground);
        root.style.setProperty('--brdclr', this[themeId].border);
    },
    defaultValues: function(){  
        themes.changeTheme('dark');
        function themeSelectorStyle(themeId){
            document.getElementById(themeId).style.backgroundColor = themes[themeId].background;
            document.getElementById(themeId).style.color = themes[themeId].font;
            document.getElementById(themeId).style.borderColor = themes[themeId].background;
        }
        themeSelectorStyle('dark');
        themeSelectorStyle('light');
        themeSelectorStyle('pink');
        themeSelectorStyle('blue');
        themeSelectorStyle('yellow');
        themeSelectorStyle('green');
    }
}

themes.defaultValues();

function changeIndexTheme(themeId){
    themes.changeTheme(themeId);
};