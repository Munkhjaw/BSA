var APP_DATA = {
  "scenes": [
    {
      "id": "0-bayankhongor",
      "name": "Bayankhongor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4096,
      "initialViewParameters": {
        "yaw": -0.003686947080735692,
        "pitch": 0.2120606064097661,
        "fov": 1.393681863712438
      },
      "linkHotspots": [
        {
          "yaw": -3.1189090901362384,
          "pitch": 0.018548959625791284,
          "rotation": 0,
          "target": "1-ulaagchyn-black-lake"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-ulaagchyn-black-lake",
      "name": "Ulaagchyn black lake",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 504,
      "initialViewParameters": {
        "yaw": 2.941878234618919,
        "pitch": 0.10688796318819271,
        "fov": 1.393681863712438
      },
      "linkHotspots": [
        {
          "yaw": 3.140358431923379,
          "pitch": 0.04654484712940388,
          "rotation": 0,
          "target": "0-bayankhongor"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Gigapixel Panorama",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
