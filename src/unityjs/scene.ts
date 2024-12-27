import {registerComponentType, UnitySceneDef} from "@unityjs";
export const Scene : UnitySceneDef = {
  "gameObjects": [
    {
      "name": "ThreeJSConnector",
      "parent": "null",
      "enabled": true,
      "tag": "Untagged",
      "id": -8926,
      "components": [],
      "defaultComponents": [
        {
          "name": "TransformComponent",
          "props": {
            "position": [
              2.55,
              1.69764543,
              2.35
            ],
            "rotation": [
              0.0,
              0.0,
              0.0,
              -1.0
            ],
            "scale": [
              1.0,
              1.0,
              1.0
            ]
          }
        }
      ],
      "children": []
    },
    {
      "name": "Main Camera",
      "parent": "null",
      "enabled": true,
      "tag": "MainCamera",
      "id": 25954,
      "components": [],
      "defaultComponents": [
        {
          "name": "TransformComponent",
          "props": {
            "position": [
              9.33,
              2.71,
              -0.25
            ],
            "rotation": [
              0.0,
              -0.7071686,
              0.0,
              -0.707045
            ],
            "scale": [
              1.0,
              1.0,
              1.0
            ]
          }
        },
        {
          "name": "CameraComponent"
        }
      ],
      "children": []
    },
    {
      "name": "Directional Light",
      "parent": "null",
      "enabled": true,
      "tag": "Untagged",
      "id": 25936,
      "components": [],
      "defaultComponents": [
        {
          "name": "TransformComponent",
          "props": {
            "position": [
              0.0,
              3.0,
              0.0
            ],
            "rotation": [
              0.408217877,
              -0.234569684,
              -0.109381631,
              -0.8754261
            ],
            "scale": [
              1.0,
              1.0,
              1.0
            ]
          }
        },
        {
          "name": "LightComponent",
          "props": {
            "lightType": "Directional",
            "color": "FFF4D6",
            "intensity": 1.0
          }
        }
      ],
      "children": []
    },
    {
      "name": "Scene",
      "parent": "null",
      "enabled": true,
      "tag": "Untagged",
      "id": 25932,
      "components": [],
      "defaultComponents": [
        {
          "name": "TransformComponent",
          "props": {
            "position": [
              3.65432668,
              10.9336042,
              16.4504776
            ],
            "rotation": [
              0.0,
              0.0,
              0.0,
              -1.0
            ],
            "scale": [
              1.0,
              1.0,
              1.0
            ]
          }
        }
      ],
      "children": []
    },
    {
      "name": "Cube",
      "parent": "null",
      "enabled": true,
      "tag": "Untagged",
      "id": 25944,
      "components": [],
      "defaultComponents": [
        {
          "name": "TransformComponent",
          "props": {
            "position": [
              -1.2,
              0.0,
              0.1
            ],
            "rotation": [
              0.0,
              0.0,
              0.0,
              -1.0
            ],
            "scale": [
              7.4146,
              0.27339,
              4.819
            ]
          }
        },
        {
          "name": "MeshComponent",
          "props": {
            "primitive": true,
            "color": "FFFFFF",
            "primitiveShape": "Cube",
            "assetPath": "",
            "modelPath": ""
          }
        }
      ],
      "children": []
    },
    {
      "name": "JS-test33",
      "parent": "null",
      "enabled": true,
      "tag": "Untagged",
      "id": -1234,
      "components": [],
      "defaultComponents": [
        {
          "name": "TransformComponent",
          "props": {
            "position": [
              -1.21,
              1.65,
              0.0545846224
            ],
            "rotation": [
              0.0,
              0.6968701,
              0.0,
              -0.7171975
            ],
            "scale": [
              1.0,
              1.0,
              1.0
            ]
          }
        },
        {
          "name": "MeshComponent",
          "props": {
            "primitive": false,
            "color": "FF0000",
            "primitiveShape": "",
            "assetPath": "Assets/Models/test33.glb",
            "modelPath": "0"
          }
        }
      ],
      "children": [
        {
          "name": "Cube",
          "parent": -1234,
          "enabled": true,
          "tag": "Untagged",
          "id": -1244,
          "components": [],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": [
                  0.0,
                  1.87152541,
                  0.0
                ],
                "rotation": [
                  0.0,
                  0.0,
                  0.0,
                  -1.0
                ],
                "scale": [
                  0.204049408,
                  0.204049408,
                  0.204049408
                ]
              }
            },
            {
              "name": "MeshComponent",
              "props": {
                "primitive": false,
                "color": "2AFF00",
                "primitiveShape": "",
                "assetPath": "Assets/Models/test33.glb",
                "modelPath": "0/0"
              }
            }
          ],
          "children": []
        }
      ]
    },
    {
      "name": "JS-test33 (1)",
      "parent": "null",
      "enabled": true,
      "tag": "Untagged",
      "id": -1254,
      "components": [],
      "defaultComponents": [
        {
          "name": "TransformComponent",
          "props": {
            "position": [
              1.85,
              0.639999866,
              -1.34
            ],
            "rotation": [
              0.0,
              0.9998967,
              0.0,
              -0.0143751185
            ],
            "scale": [
              0.48735,
              0.48735,
              0.48735
            ]
          }
        },
        {
          "name": "MeshComponent",
          "props": {
            "primitive": false,
            "color": "FFD800",
            "primitiveShape": "",
            "assetPath": "Assets/Models/test33.glb",
            "modelPath": "0"
          }
        }
      ],
      "children": [
        {
          "name": "Cube",
          "parent": -1254,
          "enabled": true,
          "tag": "Untagged",
          "id": -1264,
          "components": [],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": [
                  0.0,
                  3.33,
                  0.0
                ],
                "rotation": [
                  0.4983922,
                  -9.31322464E-10,
                  0.0143333366,
                  -0.8668332
                ],
                "scale": [
                  0.204049408,
                  2.95300317,
                  0.204049408
                ]
              }
            },
            {
              "name": "MeshComponent",
              "props": {
                "primitive": false,
                "color": "2AFF00",
                "primitiveShape": "",
                "assetPath": "Assets/Models/test33.glb",
                "modelPath": "0/0"
              }
            }
          ],
          "children": []
        }
      ]
    }
  ]
};