var moment = require('moment');

function hbsHelpers(handlebars) {
    return handlebars.create({
        defaultLayout: 'main',

        partialsDir: ['views/partials/'],

        helpers: {
            inc: function(value, options) {
                return parseInt(value) + 1;
            },

            // exemple d'utilisation dans handlebars {{formatDate vip.VIP_NAISSANCE 'DD MMMM YYYY' }}
            // --> 05 novembre 1978
            formatDate: function (date, format) {
                moment.locale('fr', { // POUR AVOIR LA DATE EN FRANCAIS
                    months: 'janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre'.split('_'),
                    monthsShort: 'janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.'.split('_'),
                    weekdays: 'dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi'.split('_'),
                    weekdaysShort: 'dim._lun._mar._mer._jeu._ven._sam.'.split('_'),
                    weekdaysMin: 'Di_Lu_Ma_Me_Je_Ve_Sa'.split('_'),
                    longDateFormat: {
                        LT: 'HH:mm',
                        L: 'DD/MM/YYYY',
                        LL: 'D MMMM YYYY',
                        LLL: 'D MMMM YYYY LT',
                        LLLL: 'dddd D MMMM YYYY LT'
                    },
                    calendar: {
                        sameDay: '[Aujourdhui à] LT',
                        nextDay: '[Demain à] LT',
                        nextWeek: 'dddd [à] LT',
                        lastDay: '[Hier à] LT',
                        lastWeek: 'dddd [dernier à] LT',
                        sameElse: 'L'
                    },
                    relativeTime: {
                        future: 'dans %s',
                        past: 'il y a %s',
                        s: 'quelques secondes',
                        m: 'une minute',
                        mm: '%d minutes',
                        h: 'une heure',
                        hh: '%d heures',
                        d: 'un jour',
                        dd: '%d jours',
                        M: 'un mois',
                        MM: '%d mois',
                        y: 'une année',
                        yy: '%d années'
                    },
                    ordinal: function (number) {
                        return number + (number === 1 ? 'er' : 'ème');
                    },
                    week: {
                        dow: 1, // Monday is the first day of the week.
                        doy: 4 // The week that contains Jan 4th is the first week of the year.
                    }
                });
                return moment(date).format(format);
            },
            /* Exemple d'utilisation :
            {{#ifCond  this.vil_num '<' 10}}
               plus petit
             {{else}}
               plus grand
            {{/ifCond}} */
            ifCond : function (v1, operator, v2, options) {

                switch (operator) {
                    case '==':
                        return (v1 == v2) ? options.fn(this) : options.inverse(this);
                    case '===':
                        return (v1 === v2) ? options.fn(this) : options.inverse(this);
                    case '<':
                        return (v1 < v2) ? options.fn(this) : options.inverse(this);
                    case '<=':
                        return (v1 <= v2) ? options.fn(this) : options.inverse(this);
                    case '>':
                        return (v1 > v2) ? options.fn(this) : options.inverse(this);
                    case '>=':
                        return (v1 >= v2) ? options.fn(this) : options.inverse(this);
                    case '&&':
                        return (v1 && v2) ? options.fn(this) : options.inverse(this);
                    case '||':
                        return (v1 || v2) ? options.fn(this) : options.inverse(this);
                    default:
                        return options.inverse(this);
                }
            }
        }
    });
}

module.exports = hbsHelpers;
