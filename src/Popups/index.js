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

 const grittingroutesPopup = (feature, layer) => {
  
  const content = `<div class="smbc-map__item">
  <div class="smbc-map__item__header__block">
    <i class="fa fa-road smbc-map__item__header__block__icon" aria-hidden="true"></i>
    <span class="smbc-map__item__header__block__title">Gritting Routes</span>
  </div>
  <div class="smbc-map__item__body">
    <p>Route Type: ${feature.properties.classification}</p>
    <p>Route No: ${feature.properties.route}</p>
    <p>Route Description: ${feature.properties.name}</p>
  </div>
</div>`
 
  layer.bindPopup(content)
 } 

 export {
  prowPopup,
  tpoPopup,
  Land_Ownership_Popup,
  grittingroutesPopup
}