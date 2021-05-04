function getColor_AreaCommittees(d) {
    switch 	(d) { 	case 'Corporate' : 
                        return '#ffff00'
                    case 'Education' : 
                        return '#ffaf5f'
                    case 'Greenspace' : 
                        return '#55ff55'
                    case 'Highways' : 
                        return '#3255ff'
                    case 'Social Services' :
                        return '#c88cff'
                    case 'Stockport Homes' : 
                        return '#d70000'
                    case 'Strategic Housing' : 
                        return '#15ebf6'
                    case 'Not Assigned' : 
                        return '#000000'
                    case 'Other' : 
                        return '#000000'                   
                }
            }
function LandOwnershipstyle(feature) {
    return {
        fillColor: getColor_AreaCommittees(feature.properties.committee_new),
        weight: 0,
        opacity: 0,
        color: 'black',
        fillOpacity: 0.5
        }
    }

    const prowStyle = {
        color: '#006d2c',
        weight: 4,
        opacity: 1,
        fillColor: '#fec44f',
        fillOpacity: 0,
        dashArray: '7,7,7',
        dashOffset: '0'
    }

const tpoStyle = {
    color: '#00ff00',
    weight: 1,
    opacity: 1,
    fillColor: '#00ff00',
    fillOpacity: 0.7
}
const proposedtpoStyle = {
    color: '#f7ff05',
    weight: 1,
    opacity: 1,
    fillColor: '#f7ff05',
    fillOpacity: 0.7
}
const revokedtpoStyle = {
    color: '#2e3330',
    weight: 1,
    opacity: 1,
    fillColor: '#2e3330',
    fillOpacity: 0.7
}
const adopted_highwaysStyle = {
    color: '#ce1256',
    weight: 1,
    opacity: 0.25,
    fillColor: '#ce1256',
    fillOpacity: 0.25
}
const Leasesstyle = {
    color: '#006400',
    weight: 2,
    opacity: 1,
    fillColor: '#006400',
    fillOpacity: 0
}
const Assetsstyle = {
    color: '#006400',
    weight: 2,
    opacity: 1,
    fillColor: '#006400',
    fillOpacity: 0
}
const greenbeltStyle = {
    color: '#b3de69',
    weight: 2,
    opacity: 0,
    fillColor: '#b3de69',
    fillOpacity: 0.25
}
const aqmaStyle = {
    color: '#6a3d9a',
    weight: 2,
    opacity: 0.25,
    fillColor: '#6a3d9a',
    fillOpacity: 0.25
}
const Locally_listed_style = {
    color: '#fb9a99',
    weight: 2,
    opacity: 1,
    fillColor: '#fb9a99',
    fillOpacity: 0.5
}
const Statutory_listed_style = {
color: '#3288bd',
weight: 2,
opacity: 1,
fillColor: '#3288bd',
fillOpacity: 0.5
}
const Conservation_area_style = {
color: '#e31a1c',
weight: 4,
opacity: 1,
fillColor: '#e31a1c',
fillOpacity: 0
}
const Article4_1_direction_style = {
color: '#cab2d6',
weight: 2,
opacity: 1,
fillColor: '#cab2d6',
fillOpacity: 0.5
}
const Article4_2_direction_style = {
color: '#ffff99',
weight: 2,
opacity: 1,
fillColor: '#ffff99',
fillOpacity: 0.5
}
const Scheduled_monument_style = {
color: '#b15928',
weight: 2,
opacity: 1,
fillColor: '#b15928',
fillOpacity: 0.5
}
const Historic_parks_gardens_style = {
color: '#33a02c',
weight: 2,
opacity: 1,
fillColor: '#33a02c',
fillOpacity: 0.5
}
const planningappsStyle = {
    color: '#e31a1c',
    weight: 4,
    opacity: 1,
    fillColor: '#e31a1c',
    fillOpacity: 0.25
}
const section38Style = {
    color: '#fed976',
    weight: 2,
    opacity: 1,
    fillColor: '#fed976',
    fillOpacity: 0.25,
}

export {
tpoStyle,
proposedtpoStyle,
revokedtpoStyle,    
prowStyle,
LandOwnershipstyle,
adopted_highwaysStyle,
Leasesstyle,
Assetsstyle,
greenbeltStyle,
aqmaStyle,
Locally_listed_style,
Statutory_listed_style,
Conservation_area_style,
Article4_1_direction_style,
Article4_2_direction_style,
Scheduled_monument_style,
Historic_parks_gardens_style,
planningappsStyle,
section38Style
}