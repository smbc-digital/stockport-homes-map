const prowPopup = (feature, layer) => {
  
  const content = `<div class="smbc-map__item">
    <div class="smbc-map__item__header__block">
      <i class="fas fa-map-signs smbc-map__item__header__block__icon" aria-hidden="true"></i>
      <span class="smbc-map__item__header__block__title">Public Right of Way</span>
    </div>
    <div class="smbc-map__item__body">
      <p>PROW Number: ${feature.properties.row}</p>
      <p>Type: ${feature.properties.type}</p>
    </div>
  </div>`
 
  layer.bindPopup(content)
 }

 const Land_Ownership_Popup = (feature, layer) => {
  const content = `<div class="smbc-map__item">
<div class="smbc-map__item__header__block">
  <i class="fa fa-image smbc-map__item__header__block__icon" aria-hidden="true"></i>
  <span class="smbc-map__item__header__block__title">Land Ownership</span>
</div>
<div class="smbc-map__item__body">
  <p>Committee: ${feature.properties.committee_new}</p>
  <p>Title Number: ${feature.properties.titlenumber}</p>
</div>
</div>`

  layer.bindPopup(content)
}

 const tpoPopup = (feature, layer) => {
  
  const content = `<div class="smbc-map__item">
    <div class="smbc-map__item__header__block">
      <i class="fas fa-tree smbc-map__item__header__block__icon" aria-hidden="true"></i>
      <span class="smbc-map__item__header__block__title">Tree Preservation Order</span>
    </div>
    <div class="smbc-map__item__body">
      <p>Reference: ${feature.properties.tpo_number}</p>
      <p>Tree Number: ${feature.properties.tree_number}</p>
      <p>Name: ${feature.properties.tpo_name}</p>
      <p>Species: ${feature.properties.tree_species}</p>
      <p>Status: ${feature.properties.status}</p>
    </div>
  </div>`
 
  layer.bindPopup(content)
 }

 const Leases_Popup = (feature, layer) => {
  const content = `<div class="smbc-map__item">
<div class="smbc-map__item__header__block">
  <i class="fa fa-file-text smbc-map__item__header__block__icon" aria-hidden="true"></i>
  <span class="smbc-map__item__header__block__title">Leases</span>
</div>
<div class="smbc-map__item__body">
  <p>Lease ID: ${feature.properties.lease_id}</p>
  <p>Tenant: ${feature.properties.tenant}</p>
  <p>Lease Type: ${feature.properties.lease_type}</p>
  <p>Property Leased: ${feature.properties.property_leased}</p>
  <p>Property Type: ${feature.properties.property_type}</p>   
</div>
</div>`

  layer.bindPopup(content)
}
const Assets_Popup = (feature, layer) => {
  const content = `<div class="smbc-map__item">
<div class="smbc-map__item__header__block">
  <i class="fa fa-home smbc-map__item__header__block__icon" aria-hidden="true"></i>
  <span class="smbc-map__item__header__block__title">Council Owned Property Assets</span>
</div>
<div class="smbc-map__item__body">
<p>Name: ${feature.properties.epims_property_name}</p>
<p>UPRN: ${feature.properties.epims_uprn}</p>
</div>
</div>`

  layer.bindPopup(content)
}

const greenbeltPopup = (feature, layer) => {
  
  const content = `<div class="smbc-map__item">
  <div class="smbc-map__item__header__block">
    <i class="fab fa-envira smbc-map__item__header__block__icon" aria-hidden="true"></i>
    <span class="smbc-map__item__header__block__title">Green Belt</span>
  </div>
</div>`

  layer.bindPopup(content)
 }

 const aqmaPopup = (feature, layer) => {
  
  const content = `<div class="smbc-map__item">
  <div class="smbc-map__item__header__block">
    <i class="fa fa-list smbc-map__item__header__block__icon" aria-hidden="true"></i>
    <span class="smbc-map__item__header__block__title">Air Quality Management Area</span>
  </div>
  <div class="smbc-map__item__body">
    <p>Notes: ${feature.properties.notes}</p>
  </div>
</div>`

  layer.bindPopup(content)
 }

 const Locally_listed_Popup = (feature, layer) => {
  const content = `<div class="smbc-map__item">
  <div class="smbc-map__item__header__block">
    <i class="fa fa-list smbc-map__item__header__block__icon" aria-hidden="true"></i>
    <span class="smbc-map__item__header__block__title">Locally Listed Building</span>
  </div>
  <div class="smbc-map__item__body">
    <p>Name: ${feature.properties.name}</p>
    <p>Type: ${feature.properties.type}</p>
    <p>Committee: ${feature.properties.committee}</p>
    <p>Ward: ${feature.properties.ward}</p>
    <a href="${feature.properties.web_db_link}" target="_blank">Further Information</a>
    </div></div>`
  layer.bindPopup(content)
}

const Statutory_listed_Popup = (feature, layer) => {
  const content = `<div class="smbc-map__item">
  <div class="smbc-map__item__header__block">
    <i class="fa fa-list smbc-map__item__header__block__icon" aria-hidden="true"></i>
    <span class="smbc-map__item__header__block__title">Statutory Listed Building</span>
  </div>
  <div class="smbc-map__item__body">
    <p>Name: ${feature.properties.name}</p>
    <p>Type: ${feature.properties.type}</p>
    <p>Grade: ${feature.properties.grade}</p>
    <p>Committee: ${feature.properties.committee}</p>
    <p>Ward: ${feature.properties.ward}</p>
    <a href="${feature.properties.web_db_link}" target="_blank"> Further Information</a>
    </div></div>`
  layer.bindPopup(content)
}

const Conservation_area_Popup = (feature, layer) => {
  const content = `<div class="smbc-map__item">
  <div class="smbc-map__item__header__block">
    <i class="fa fa-tag smbc-map__item__header__block__icon" aria-hidden="true"></i>
    <span class="smbc-map__item__header__block__title">Conservation Area</span>
  </div>
  <div class="smbc-map__item__body">
    <p>Name: ${feature.properties.cons_area}</p>
    <a href="${feature.properties.web_info_link}" target="_blank">Further Information</a>
    </div></div>`
  layer.bindPopup(content)
}

const Article4_1_direction_Popup = (feature, layer) => {
  const content = `<div class="smbc-map__item">
  <div class="smbc-map__item__header__block">
    <i class="fa fa-list smbc-map__item__header__block__icon" aria-hidden="true"></i>
    <span class="smbc-map__item__header__block__title">Article 4-1 Direction</span>
  </div>
  <div class="smbc-map__item__body">
    <p>Name: ${feature.properties.conservation_area}</p>
    <p>Type: ${feature.properties.type}</p>
    <a href="${feature.properties.web_db_link}" target="_blank">Further Information</a>
    </div></div>`
  layer.bindPopup(content)
}

const Article4_2_direction_Popup = (feature, layer) => {
  const content = `<div class="smbc-map__item">
  <div class="smbc-map__item__header__block">
    <i class="fa fa-list smbc-map__item__header__block__icon" aria-hidden="true"></i>
    <span class="smbc-map__item__header__block__title">Article 4-2 Direction</span>
  </div>
  <div class="smbc-map__item__body">
    <p>Name: ${feature.properties.conservation_area}</p>
    <p>Type: ${feature.properties.type}</p>
    <a href="${feature.properties.web_db_link}" target="_blank">Further Information</a>
    </div></div>`
  layer.bindPopup(content)
}

const Scheduled_monument_Popup = (feature, layer) => {
  const content = `<div class="smbc-map__item">
  <div class="smbc-map__item__header__block">
    <i class="fa fa-university smbc-map__item__header__block__icon" aria-hidden="true"></i>
    <span class="smbc-map__item__header__block__title">Scheduled Monument</span>
  </div>
  <div class="smbc-map__item__body">
    <p>Name: ${feature.properties.name}</p>
    <p>National Monument No: ${feature.properties.national_monument_no}</p>
    <p>${feature.properties.web_db_link}</p>
    </div></div>`
  layer.bindPopup(content)
}

const Historic_Parks_Gardens_Popup = (feature, layer) => {
  const content = `<div class="smbc-map__item">
  <div class="smbc-map__item__header__block">
    <i class="fa fa-tree smbc-map__item__header__block__icon" aria-hidden="true"></i>
    <span class="smbc-map__item__header__block__title">Registered Historic Park or Garden</span>
  </div>
  <div class="smbc-map__item__body">
    <p>Name: ${feature.properties.site}</p>
    <p>${feature.properties.web_db_link}</p>
    </div></div>`
  layer.bindPopup(content)
}

const planningappsPopup = (feature, layer) => {
  
  const content = `<div class="smbc-map__item">
  <div class="smbc-map__item__header__block">
    <i class="fa fa-building smbc-map__item__header__block__icon" aria-hidden="true"></i>
    <span class="smbc-map__item__header__block__title">Planning Applications</span>
  </div>
  <div class="smbc-map__item__body">
    <p>Planning Application No.: ${feature.properties.refval}</p>
    <p>Address: ${feature.properties.address}</p>
    <p>App Type: ${feature.properties.application_type}</p>
    <p>Proposal: ${feature.properties.proposal}</p>
    <p>Decision: ${feature.properties.decision}</p>
    <p>Decision Date: ${feature.properties.decision_date}</p>
  </div>
</div>`
 
  layer.bindPopup(content)
 }

 const section38Popup = (feature, layer) => {
  
  const content = `<div class="smbc-map__item">
  <div class="smbc-map__item__header__block">
    <i class="fa fa-list smbc-map__item__header__block__icon" aria-hidden="true"></i>
    <span class="smbc-map__item__header__block__title">Section 38 Agreements</span>
  </div>
  <div class="smbc-map__item__body">
  <p>Description: ${feature.properties.description}</p>
  </div>
</div>`
  
  layer.bindPopup(content)
  }  

 const streetlightPopup = (feature, layer) => {
  
  const content = `<div class="smbc-map__item">
  <div class="smbc-map__item__header__block">
    <i class="fa fa-lightbulb-o smbc-map__item__header__block__icon" aria-hidden="true"></i>
    <span class="smbc-map__item__header__block__title">Streetlight</span>
  </div>
  <div class="smbc-map__item__body">
  <p>ID: ${feature.properties.central_asset_id}</p>
  <p>Type: ${feature.properties.feature_type_name}</p>
  <p>Location: ${feature.properties.location_description}</p>
  </div>
</div>`
  
  layer.bindPopup(content)
  }  

  

 export {
  prowPopup,
  tpoPopup,
  Land_Ownership_Popup,
  Leases_Popup,
  Assets_Popup,
  greenbeltPopup,
  aqmaPopup,
  Locally_listed_Popup,
  Statutory_listed_Popup,
  Conservation_area_Popup,
  Article4_1_direction_Popup,
  Article4_2_direction_Popup,
  Scheduled_monument_Popup,
  Historic_Parks_Gardens_Popup,
  planningappsPopup,
  section38Popup,
  streetlightPopup
}