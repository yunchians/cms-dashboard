/**
 *  ex: <span>{{ 'aaaa' | test(1234) }}</span>
 */
export default {
    name: function(value, type = 1) {
        let str
        switch (type) {
            case 1:
                str = {
                    '1': 'Dua Lipa',
                    '2': 'Kate Perry',
                    '3': 'Avicii',
                    '4': 'Maroon 5',
                    '5': 'Bruno Mars',
                    '6': 'Adele',
                    '7': 'Rihanna',
                    '8': 'Sia',
                    '9': 'Christina Aguilera',
                    '10': 'Marshmello'
                }
                return (str[value]) ? str[value] : value
        }
        return value
    }
}