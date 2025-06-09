var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_ADMINISTRASIKECAMATAN_AR_50K_1 = new ol.format.GeoJSON();
var features_ADMINISTRASIKECAMATAN_AR_50K_1 = format_ADMINISTRASIKECAMATAN_AR_50K_1.readFeatures(json_ADMINISTRASIKECAMATAN_AR_50K_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ADMINISTRASIKECAMATAN_AR_50K_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADMINISTRASIKECAMATAN_AR_50K_1.addFeatures(features_ADMINISTRASIKECAMATAN_AR_50K_1);
var lyr_ADMINISTRASIKECAMATAN_AR_50K_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ADMINISTRASIKECAMATAN_AR_50K_1, 
                style: style_ADMINISTRASIKECAMATAN_AR_50K_1,
                popuplayertitle: 'ADMINISTRASIKECAMATAN_AR_50K',
                interactive: true,
                title: '<img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1.png" /> ADMINISTRASIKECAMATAN_AR_50K'
            });
var format_RSKTBMyPlaces_2 = new ol.format.GeoJSON();
var features_RSKTBMyPlaces_2 = format_RSKTBMyPlaces_2.readFeatures(json_RSKTBMyPlaces_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RSKTBMyPlaces_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RSKTBMyPlaces_2.addFeatures(features_RSKTBMyPlaces_2);
var lyr_RSKTBMyPlaces_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RSKTBMyPlaces_2, 
                style: style_RSKTBMyPlaces_2,
                popuplayertitle: 'RS KTB — My Places',
                interactive: true,
                title: 'RS KTB — My Places'
            });
var format_ktb2qgis_3 = new ol.format.GeoJSON();
var features_ktb2qgis_3 = format_ktb2qgis_3.readFeatures(json_ktb2qgis_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ktb2qgis_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ktb2qgis_3.addFeatures(features_ktb2qgis_3);
var lyr_ktb2qgis_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ktb2qgis_3, 
                style: style_ktb2qgis_3,
                popuplayertitle: 'ktb2qgis',
                interactive: true,
                title: '<img src="styles/legend/ktb2qgis_3.png" /> ktb2qgis'
            });
var format_RSUHANDAYANI2_4 = new ol.format.GeoJSON();
var features_RSUHANDAYANI2_4 = format_RSUHANDAYANI2_4.readFeatures(json_RSUHANDAYANI2_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RSUHANDAYANI2_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RSUHANDAYANI2_4.addFeatures(features_RSUHANDAYANI2_4);
var lyr_RSUHANDAYANI2_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RSUHANDAYANI2_4, 
                style: style_RSUHANDAYANI2_4,
                popuplayertitle: 'RSU HANDAYANI2',
                interactive: true,
                title: '<img src="styles/legend/RSUHANDAYANI2_4.png" /> RSU HANDAYANI2'
            });
var format_RSDRYACUDU_5 = new ol.format.GeoJSON();
var features_RSDRYACUDU_5 = format_RSDRYACUDU_5.readFeatures(json_RSDRYACUDU_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RSDRYACUDU_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RSDRYACUDU_5.addFeatures(features_RSDRYACUDU_5);
var lyr_RSDRYACUDU_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RSDRYACUDU_5, 
                style: style_RSDRYACUDU_5,
                popuplayertitle: 'RSD RYACUDU',
                interactive: true,
                title: '<img src="styles/legend/RSDRYACUDU_5.png" /> RSD RYACUDU'
            });
var format_MARIAREGINAHOSPITAL_6 = new ol.format.GeoJSON();
var features_MARIAREGINAHOSPITAL_6 = format_MARIAREGINAHOSPITAL_6.readFeatures(json_MARIAREGINAHOSPITAL_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MARIAREGINAHOSPITAL_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MARIAREGINAHOSPITAL_6.addFeatures(features_MARIAREGINAHOSPITAL_6);
var lyr_MARIAREGINAHOSPITAL_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MARIAREGINAHOSPITAL_6, 
                style: style_MARIAREGINAHOSPITAL_6,
                popuplayertitle: 'MARIA REGINA HOSPITAL',
                interactive: true,
                title: '<img src="styles/legend/MARIAREGINAHOSPITAL_6.png" /> MARIA REGINA HOSPITAL'
            });
var format_RSCMC_7 = new ol.format.GeoJSON();
var features_RSCMC_7 = format_RSCMC_7.readFeatures(json_RSCMC_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RSCMC_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RSCMC_7.addFeatures(features_RSCMC_7);
var lyr_RSCMC_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RSCMC_7, 
                style: style_RSCMC_7,
                popuplayertitle: 'RS CMC',
                interactive: true,
                title: '<img src="styles/legend/RSCMC_7.png" /> RS CMC'
            });
var format_RSYUSUF_8 = new ol.format.GeoJSON();
var features_RSYUSUF_8 = format_RSYUSUF_8.readFeatures(json_RSYUSUF_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RSYUSUF_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RSYUSUF_8.addFeatures(features_RSYUSUF_8);
var lyr_RSYUSUF_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RSYUSUF_8, 
                style: style_RSYUSUF_8,
                popuplayertitle: 'RS YUSUF',
                interactive: true,
                title: '<img src="styles/legend/RSYUSUF_8.png" /> RS YUSUF'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_ADMINISTRASIKECAMATAN_AR_50K_1.setVisible(true);lyr_RSKTBMyPlaces_2.setVisible(true);lyr_ktb2qgis_3.setVisible(true);lyr_RSUHANDAYANI2_4.setVisible(true);lyr_RSDRYACUDU_5.setVisible(true);lyr_MARIAREGINAHOSPITAL_6.setVisible(true);lyr_RSCMC_7.setVisible(true);lyr_RSYUSUF_8.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_ADMINISTRASIKECAMATAN_AR_50K_1,lyr_RSKTBMyPlaces_2,lyr_ktb2qgis_3,lyr_RSUHANDAYANI2_4,lyr_RSDRYACUDU_5,lyr_MARIAREGINAHOSPITAL_6,lyr_RSCMC_7,lyr_RSYUSUF_8];
lyr_ADMINISTRASIKECAMATAN_AR_50K_1.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Persentase': 'Persentase', 'Klasifikas': 'Klasifikas', });
lyr_RSKTBMyPlaces_2.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_ktb2qgis_3.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_RSUHANDAYANI2_4.set('fieldAliases', {'id': 'id', 'RS': 'RS', 'FOTO': 'FOTO', 'Foto_1': 'Foto_1', });
lyr_RSDRYACUDU_5.set('fieldAliases', {'id': 'id', 'RS': 'RS', 'FOTO': 'FOTO', 'Foto_1': 'Foto_1', });
lyr_MARIAREGINAHOSPITAL_6.set('fieldAliases', {'id': 'id', 'RS': 'RS', 'FOTO': 'FOTO', 'Foto_1': 'Foto_1', });
lyr_RSCMC_7.set('fieldAliases', {'id': 'id', 'RS': 'RS', 'FOTO': 'FOTO', 'Foto_1': 'Foto_1', });
lyr_RSYUSUF_8.set('fieldAliases', {'id': 'id', 'RS': 'RS', 'FOTO': 'FOTO', 'Foto_1': 'Foto_1', });
lyr_ADMINISTRASIKECAMATAN_AR_50K_1.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'Persentase': 'TextEdit', 'Klasifikas': 'TextEdit', });
lyr_RSKTBMyPlaces_2.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_ktb2qgis_3.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'ExternalResource', });
lyr_RSUHANDAYANI2_4.set('fieldImages', {'id': 'TextEdit', 'RS': 'TextEdit', 'FOTO': 'TextEdit', 'Foto_1': 'ExternalResource', });
lyr_RSDRYACUDU_5.set('fieldImages', {'id': 'TextEdit', 'RS': 'TextEdit', 'FOTO': 'TextEdit', 'Foto_1': 'ExternalResource', });
lyr_MARIAREGINAHOSPITAL_6.set('fieldImages', {'id': 'TextEdit', 'RS': 'TextEdit', 'FOTO': 'TextEdit', 'Foto_1': 'ExternalResource', });
lyr_RSCMC_7.set('fieldImages', {'id': 'TextEdit', 'RS': 'TextEdit', 'FOTO': 'TextEdit', 'Foto_1': 'ExternalResource', });
lyr_RSYUSUF_8.set('fieldImages', {'id': 'TextEdit', 'RS': 'TextEdit', 'FOTO': 'TextEdit', 'Foto_1': 'ExternalResource', });
lyr_ADMINISTRASIKECAMATAN_AR_50K_1.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'Persentase': 'no label', 'Klasifikas': 'no label', });
lyr_RSKTBMyPlaces_2.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_ktb2qgis_3.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'inline label - visible with data', });
lyr_RSUHANDAYANI2_4.set('fieldLabels', {'id': 'inline label - visible with data', 'RS': 'inline label - visible with data', 'FOTO': 'inline label - visible with data', 'Foto_1': 'no label', });
lyr_RSDRYACUDU_5.set('fieldLabels', {'id': 'inline label - visible with data', 'RS': 'inline label - visible with data', 'FOTO': 'inline label - visible with data', 'Foto_1': 'no label', });
lyr_MARIAREGINAHOSPITAL_6.set('fieldLabels', {'id': 'inline label - visible with data', 'RS': 'inline label - visible with data', 'FOTO': 'inline label - visible with data', 'Foto_1': 'no label', });
lyr_RSCMC_7.set('fieldLabels', {'id': 'inline label - visible with data', 'RS': 'inline label - visible with data', 'FOTO': 'inline label - visible with data', 'Foto_1': 'no label', });
lyr_RSYUSUF_8.set('fieldLabels', {'id': 'inline label - visible with data', 'RS': 'inline label - visible with data', 'FOTO': 'inline label - visible with data', 'Foto_1': 'no label', });
lyr_RSYUSUF_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});