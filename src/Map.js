import React, { useRef, useEffect } from 'react';
import L from 'leaflet';
import tangram from 'tangram';

import 'leaflet/dist/leaflet.css';

export function TangramMap() {
    const mapContainer = useRef(null);

    useEffect(() => {
        if (mapContainer.current === null) {
            return
        }
        // Конфигурация Tangram, здесь можно указать настройки и источник данных
        const mapConfig = {
            // Путь к файлу стиля или объект со стилем конфигурации
            scene: 'scene.yaml',

            // Устанавливаем начальные координаты и масштаб карты
            // Эти значения могут быть настроены для вашего местоположения и предпочтений
            view: {
                lat: 40.70531887544228,
                lng: -74.00976419448853,
                zoom: 16
            }
        };

        // Инициализируем map внутри useEffect, чтобы избежать конфликтов с возможными перерендерами компонента
        const map = L.map(mapContainer.current).setView([mapConfig.view.lat, mapConfig.view.lng], mapConfig.view.zoom);

        // Добавляем слой Tangram к карте
        const tangramLayer = tangram.leafletLayer(mapConfig);
        tangramLayer.addTo(map);

        // Возвращаем функцию очистки, которая будет вызываться при размонтировании компонента
        return () => {
            if (map) {
                map.remove();
            }
        };
    }); // Пустой массив зависимостей, чтобы эффект сработал один раз после монтирования компонента

    return <div ref={mapContainer} className="TangramMap" />;
}
