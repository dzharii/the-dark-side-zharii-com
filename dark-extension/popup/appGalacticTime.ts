/// <reference path="lib.ts" />

namespace AppGalacticTime {

    function formatTime(dt: Date, timeZone: string) {
        return dt.toLocaleString('en-GB', { timeZone })
            .replace(/(\d\d)\/(\d\d)\/(\d\d\d\d), (\d\d):(\d\d):(\d\d)/, '$3-$2-$1 $4:$5');
    }

    const appGalacticTime = Force.findOne('#appGalacticTime');
    type GalacticTime = {
        id: string
        displayName: string
        tz: string
    }
    const cssPfx = 'galacticTime';
    const galacticTime: GalacticTime[] = [
        {
            id: cssPfx + 'SeattleCoruscant',
            displayName: 'Coruscant',
            tz: 'America/Los_Angeles',
        },
        {
            id: cssPfx + 'UtcTimeHoth',
            displayName: 'Hoth',
            tz: 'UTC',
        },
        {
            id: cssPfx + 'KyivKamino',
            displayName: 'Kamino',
            tz: 'Europe/Kiev',
        },
    ];
    appGalacticTime.innerHTML = `
        <style>
            ${cssPfx}MainTable {
                width: 100%;
                border-collapse: collapse;
                border: 1px solid orange;
            }
            ${cssPfx}MainTable tr:nth-child(even){
                color: #f2f2f2;
            }
        </style>
        <h2>Galactic Time</h2>
        <table class="${cssPfx}MainTable">
                ${galacticTime.map(
                    item => `<tr><td>${item.displayName}</td><td id="${item.id}">${formatTime(new Date(), item.tz)}</td></tr>`
                )}
        </table>
    `.trim();

    const updateGalacticTime = () => {
        const now = new Date();
        galacticTime.forEach(item => {
            const el = Force.findOne('#' + item.id);
            const newTime = formatTime(now, item.tz)
            if (el.textContent !== newTime) {
                el.textContent = newTime;
            }
        });
    };

    setInterval(updateGalacticTime, )

}