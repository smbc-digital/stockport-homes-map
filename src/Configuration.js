import Leaflet from 'leaflet'
import { prowPopup,tpoPopup,Land_Ownership_Popup, Leases_Popup, Assets_Popup, greenbeltPopup, aqmaPopup, Locally_listed_Popup, Statutory_listed_Popup, Conservation_area_Popup, Article4_1_direction_Popup, Article4_2_direction_Popup, Scheduled_monument_Popup, Historic_Parks_Gardens_Popup } from './Popups'
import { prowStyle, tpoStyle, proposedtpoStyle, revokedtpoStyle, LandOwnershipstyle, adopted_highwaysStyle, Leasesstyle, greenbeltStyle, aqmaStyle, Locally_listed_style, Statutory_listed_style, Conservation_area_style, Article4_1_direction_style, Article4_2_direction_style, Scheduled_monument_style, Historic_parks_gardens_style } from './Styles'

const Configuration = {
    Map: {
        StartingLatLng: [53.39205825732247, -2.1383008755576998],
        StartingZoom: 17,
        FullscreenControl: true,
        DisplayLayerControls: true,
        DisplayGrayScale: true,
        DisplayStreets: true,
        EnableAddressSearch: true,
        EnableLocateControl: true,
        Class: 'govuk-grid-column-full smbc-map__container'
    },
    DynamicData: 
    [
        {
            key: 'Leases',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=land_ownership:leases&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: Leases_Popup,
                maxZoom: 16,
                style: Leasesstyle
            },
            displayOverlay: true,
            visibleByDefault: false
        },       
        {
            key: 'Council Owned Land',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=land_ownership:council_owned_land&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: Land_Ownership_Popup,
                maxZoom: 16,
                style: LandOwnershipstyle
            },
            displayOverlay: true,
            visibleByDefault: false
        },
        {
            key: 'Council Owned Buildings',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=land_ownership:smbc_buildings&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: Assets_Popup,
                maxZoom: 16,
                pointToLayer: (feature, latlng) => {
                    return Leaflet.circleMarker(latlng, {
                        radius: 8,
                        fillColor: '#15863a',
                        color: '#000',
                        weight: 1,
                        fillOpacity: 1
                    })
                },
            },
            displayOverlay: true,
            visibleByDefault: false
        },
        {
            key: 'Tree Preservation Orders',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=trees:tpo_merged&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: tpoPopup,
                maxZoom: 16,
                style: tpoStyle
            },
            displayOverlay: true,
            visibleByDefault: false
        },

        {
            key: 'TPO - Proposed',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=trees:tpo_proposed&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: tpoPopup,
                maxZoom: 16,
                style: proposedtpoStyle
            },
            displayOverlay: true,
            visibleByDefault: false
        },

        {
            key: 'TPO - Revoked',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=trees:tpo_revoked&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: tpoPopup,
                maxZoom: 16,
                style: revokedtpoStyle
            },
            displayOverlay: true,
            visibleByDefault: false
        },
        {
            key: 'Public Rights of Way',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=highways:public_rights_of_way&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: prowPopup,
                maxZoom: 16,
                style: prowStyle
            },
            displayOverlay: true,
            visibleByDefault: false 
        },

        {
            key: 'Adopted Highways',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=con29:2_1a&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                style: adopted_highwaysStyle,
                maxZoom: 16
            },
            displayOverlay: true,
            visibleByDefault: false
        },

        {
            key: 'Green Belt',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=planning:green_belt_os&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                maxZoom: 16,
                style: greenbeltStyle,
                onEachFeature: greenbeltPopup
            },
            displayOverlay: true,
            visibleByDefault: false
        },

        {
            key: 'Air Quality Management Areas',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=climatology:air_quality_management_areas&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                maxZoom: 16,
                style: aqmaStyle,
                onEachFeature: aqmaPopup
            },
            displayOverlay: true,
            visibleByDefault: false
        },        

        {
            key: 'Article 4-1 Direction',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=heritage:article_4_1&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: Article4_1_direction_Popup,
                maxZoom: 16,
                style: Article4_1_direction_style
            },
            displayOverlay: true,
            visibleByDefault: false
        },
        {
            key: 'Article 4-2 Direction',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=heritage:article_4_2&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: Article4_2_direction_Popup,
                maxZoom: 16,
                style: Article4_2_direction_style
            },
            displayOverlay: true,
            visibleByDefault: false
        },
        {
            key: 'Conservation Area',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=heritage:conservation_area&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: Conservation_area_Popup,
                maxZoom: 16,
                style: Conservation_area_style
            },
            displayOverlay: true,
            visibleByDefault: false
        },
        {
            key: 'Registered Historic Park or Garden',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=heritage:parkgarden_of_historic_interest&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: Historic_Parks_Gardens_Popup,
                maxZoom: 16,
                style: Historic_parks_gardens_style
            },
            displayOverlay: true,
            visibleByDefault: false
        },
        {
            key: 'Scheduled Monument',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=heritage:ancient_monument&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: Scheduled_monument_Popup,
                maxZoom: 16,
                style: Scheduled_monument_style
            },
            displayOverlay: true,
            visibleByDefault: false
        },
       
        {
            key: 'Locally Listed Building',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=heritage:locally_listed_buildings&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: Locally_listed_Popup,
                maxZoom: 16,
                style: Locally_listed_style
            },
            displayOverlay: true,
            visibleByDefault: false
        },
       
        {
            key: 'Statutory Listed Building',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=heritage:statutory_listed_buildings&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: Statutory_listed_Popup,
                minZoom: 16,
                style: Statutory_listed_style
            },
            displayOverlay: true,
            visibleByDefault: false
        },

        


        {
            key: 'os1250_line',
            url: 'https://spatial.stockport.gov.uk/geoserver/wms?',
            layerOptions: {
                maxZoom: 20,
                minZoom: 19,
                layers: 'base_maps:os1250_line',
                format: 'image/png',
                transparent: true
            },
            displayOverlay: false,
            visibleByDefault: true 
        },
        {
            key: 'os1250_text',
            url: 'https://spatial.stockport.gov.uk/geoserver/wms?',
            layerOptions: {
                maxZoom: 20,
                minZoom: 19,
                layers: 'base_maps:os1250_text',
                format: 'image/png',
                transparent: true
            },
            displayOverlay: false,
            visibleByDefault: true 
        }
    ],
    StaticData: 
    [
        {
            key: 'boundary',
            url: 'https://spatialgeojson.s3-eu-west-1.amazonaws.com/webmapping/boundary.geojson',
            layerOptions: {
                interactive: false,
                maxZoom: 9,
                style: {
                    color: '#000',
                    weight: 4,
                    opacity: 1,
                    fillColor: '#000',
                    fillOpacity: 0
                }
            }
        }
    ]
}

export default Configuration