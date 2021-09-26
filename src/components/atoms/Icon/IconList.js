const ICONS_ASSET_PATH = "/icons/"

const iconMap = {
    'right-arrow': 'right-arrow',
    home: 'home-outline'
}

export const mapIcon = (type) => `${ICONS_ASSET_PATH}/${iconMap[type]}.svg`
 
export const mapSize = (size) => null;