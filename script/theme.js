const themes = {
    dark: {
        class: 'theme',
        background: '#000000',
        font: '#ffffff',
        hover: '#cfcece',
        imgBackground: '#ffffff',
        border: '#000000'
    },
    light: {
        class: 'theme',
        background: '#ffffff',
        font: '#000000',
        hover: '#cfcece',
        imgBackground: '#ffffff',
        border: '#000000'
    },
    pink: {
        class: 'theme',
        background: '#ff00ff',
        font: '#000000',
        hover: '#800080',
        imgBackground: '#ff00ff',
        border: '#800080'
    },
    blue: {
        class: 'theme',
        background: '#bbdefb',
        font: '#000000',
        hover: '#008cff',
        imgBackground: '#bbdefb',
        border: '#000000'
    },
    yellow: {
        class: 'theme',
        background: '#f7ee8e',
        font: '#000000',
        hover: '#e47200',
        imgBackground: '#f7ee8e',
        border: '#000000'
    },
    green: {
        class: 'theme',
        background: '#b3cf99',
        font: '#000000',
        hover: '#658354',
        imgBackground: '#b3cf99',
        border: '#000000'
    },
    changeTheme: function(themeId){
        let root = document.querySelector('*');
        root.style.setProperty('--bgclr', this[themeId].background);
        root.style.setProperty('--fntclr', this[themeId].font);
        root.style.setProperty('--hvrclr', this[themeId].hover);
        root.style.setProperty('--imgbkgclr', this[themeId].imgBackground);
        root.style.setProperty('--brdclr', this[themeId].border);

        for(const key in themes){
            if(key == themeId && this[key].class === 'theme'){
                document.getElementById(key).style.borderBottom = `solid 2px ${this[key].hover}`;
            }
            else if(key != themeId && this[key].class === 'theme'){
                document.getElementById(key).style.borderBottom = `none`;
            };
        }
    },
    defaultValues: function(){      
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
        changeIndexTheme('dark');
    }
}

themes.defaultValues();

function changeIndexTheme(themeId){
    themes.changeTheme(themeId);
};