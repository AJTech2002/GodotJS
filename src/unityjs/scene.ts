
import {registerComponentType, UnitySceneDef} from "@unityjs";import {Color, Vector3, Quaternion} from "three";
import  RotateCubeComponent from "./components/rotateCubeComponent";

registerComponentType(RotateCubeComponent);import  FovTransformComponent from "./components/fovTransformComponent";

registerComponentType(FovTransformComponent);export const Scene : UnitySceneDef = {
  "gameObjects": [
    {
      "name": "ThreeJSConnector",
      "parent": "null",
      "enabled": true,
      "tag": "Untagged",
      "id": 25986,
      "components": [],
      "defaultComponents": [
        {
          "name": "TransformComponent",
          "props": {
            "position": new Vector3(2.55, 1.697645, 2.35),
            "rotation": new Quaternion(0, 0, 0, -1),
            "scale": new Vector3(1, 1, 1)
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
      "id": 25962,
      "components": [
        {
          "name": "FovTransformComponent",
          "props": {
            "speed": 0.02
          }
        },
        {
          "name": "RotateCubeComponent",
          "props": {
            "speed": 0.1,
            "horizontalSpeed": 0.1,
            "newProp": "",
            "v3Test": new Vector3(0, 0, 0),
            "dwd": false,
            "cameraReferenc2e": "",
            "numberARR": [
              0.0
            ],
            "color": new Color(1, 1, 1)
          }
        }
      ],
      "defaultComponents": [
        {
          "name": "TransformComponent",
          "props": {
            "position": new Vector3(0, -2.06, 0),
            "rotation": new Quaternion(0, -0.7071686, 0, -0.707045),
            "scale": new Vector3(1, 1, 1)
          }
        },
        {
          "name": "CameraComponent",
          "props": {
            "fov": 179.0
          }
        }
      ],
      "children": []
    },
    {
      "name": "Directional Light",
      "parent": "null",
      "enabled": true,
      "tag": "Untagged",
      "id": 25954,
      "components": [],
      "defaultComponents": [
        {
          "name": "TransformComponent",
          "props": {
            "position": new Vector3(0, 3, 0),
            "rotation": new Quaternion(0.4082179, -0.2345697, -0.1093816, -0.8754261),
            "scale": new Vector3(1, 1, 1)
          }
        },
        {
          "name": "LightComponent",
          "props": {
            "lightType": "Directional",
            "color": new Color(1, 0.9568627, 0.8392157),
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
      "id": 25950,
      "components": [],
      "defaultComponents": [
        {
          "name": "TransformComponent",
          "props": {
            "position": new Vector3(3.654327, 10.9336, 16.45048),
            "rotation": new Quaternion(0, 0, 0, -1),
            "scale": new Vector3(1, 1, 1)
          }
        }
      ],
      "children": []
    },
    {
      "name": "GameObject",
      "parent": "null",
      "enabled": true,
      "tag": "Untagged",
      "id": -80504,
      "components": [
        {
          "name": "RotateCubeComponent",
          "props": {
            "speed": 2.08,
            "horizontalSpeed": 0.0,
            "newProp": "",
            "v3Test": new Vector3(0, 0, 0),
            "dwd": false,
            "cameraReferenc2e": "",
            "numberARR": [
              0.0
            ],
            "color": new Color(1, 1, 1)
          }
        }
      ],
      "defaultComponents": [
        {
          "name": "TransformComponent",
          "props": {
            "position": new Vector3(-16.08, -1.68, -3.31),
            "rotation": new Quaternion(0, 0, 0, -1),
            "scale": new Vector3(1, 1, 1)
          }
        }
      ],
      "children": [
        {
          "name": "JS-test33 (313)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -65388,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(9.785042, -3.713699, -2.451817),
                "rotation": new Quaternion(0, 0.9621056, 0, -0.2726772),
                "scale": new Vector3(0.359086, 0.3590859, 0.359086)
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
              "parent": -65388,
              "enabled": false,
              "tag": "Untagged",
              "id": -65386,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (61)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -60570,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(8.545489, -28.2474, 7.294154),
                "rotation": new Quaternion(0, 0.6968701, 0, -0.7171975),
                "scale": new Vector3(0.92045, 0.92045, 0.92045)
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
              "parent": -60570,
              "enabled": false,
              "tag": "Untagged",
              "id": -60568,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (160)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -64780,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(9.785042, -28.2474, -2.451817),
                "rotation": new Quaternion(0, 0.9621056, 0, -0.2726772),
                "scale": new Vector3(0.359086, 0.3590859, 0.359086)
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
              "parent": -64780,
              "enabled": false,
              "tag": "Untagged",
              "id": -65120,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (128)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -63404,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(8.545489, -14.2937, 7.294154),
                "rotation": new Quaternion(0, 0.6968701, 0, -0.7171975),
                "scale": new Vector3(0.92045, 0.92045, 0.92045)
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
              "parent": -63404,
              "enabled": false,
              "tag": "Untagged",
              "id": -63428,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (161)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -64782,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(9.785042, -14.2937, -2.451817),
                "rotation": new Quaternion(0, 0.9621056, 0, -0.2726772),
                "scale": new Vector3(0.359086, 0.3590859, 0.359086)
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
              "parent": -64782,
              "enabled": false,
              "tag": "Untagged",
              "id": -64820,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (96)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -62436,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(12.60519, 12.0203, 6.183155),
                "rotation": new Quaternion(0, 0.6968701, 0, -0.7171975),
                "scale": new Vector3(0.5624778, 0.5624778, 0.5624778)
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
              "parent": -62436,
              "enabled": false,
              "tag": "Untagged",
              "id": -62460,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (162)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -64784,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(13.36269, 12.0203, 0.2274547),
                "rotation": new Quaternion(0, 0.9621056, 0, -0.2726772),
                "scale": new Vector3(0.2194338, 0.2194338, 0.2194338)
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
              "parent": -64784,
              "enabled": false,
              "tag": "Untagged",
              "id": -64996,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (64)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -61476,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(10.26172, 5.2373, 6.420955),
                "rotation": new Quaternion(0, 0.6968701, 0, -0.7171975),
                "scale": new Vector3(0.7089214, 0.7089214, 0.7089214)
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
              "parent": -61476,
              "enabled": false,
              "tag": "Untagged",
              "id": -61500,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (163)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -64786,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(11.21639, 5.2373, -1.085246),
                "rotation": new Quaternion(0, 0.9621056, 0, -0.2726772),
                "scale": new Vector3(0.2765644, 0.2765644, 0.2765644)
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
              "parent": -64786,
              "enabled": false,
              "tag": "Untagged",
              "id": -64998,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (31)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -57600,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(19.13659, -8.559999, 14.21045),
                "rotation": new Quaternion(0, -0.01437224, 0, -0.9998967),
                "scale": new Vector3(1.449249, 1.449248, 1.449249)
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
              "parent": -57600,
              "enabled": false,
              "tag": "Untagged",
              "id": -57598,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (164)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -64788,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(9.090919, -8.559999, 10.1785),
                "rotation": new Quaternion(0, 0.4875008, 0, -0.8731226),
                "scale": new Vector3(0.5653808, 0.5653808, 0.5653808)
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
              "parent": -64788,
              "enabled": false,
              "tag": "Untagged",
              "id": -65122,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (32)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -60456,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(16.57359, -42.8857, 5.834754),
                "rotation": new Quaternion(0, -0.01437224, 0, -0.9998967),
                "scale": new Vector3(0.3164899, 0.3164898, 0.3164899)
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
              "parent": -60456,
              "enabled": false,
              "tag": "Untagged",
              "id": -60458,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (426)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -78552,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(16.32669, 16.4843, 5.028045),
                "rotation": new Quaternion(0, -0.01437224, 0, -0.9998967),
                "scale": new Vector3(0.2073895, 0.2073895, 0.2073895)
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
              "parent": -78552,
              "enabled": false,
              "tag": "Untagged",
              "id": -78550,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (394)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -77218,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(17.16139, -39.5197, 7.755455),
                "rotation": new Quaternion(0, -0.01437224, 0, -0.9998967),
                "scale": new Vector3(0.5762533, 0.5762533, 0.5762533)
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
              "parent": -77218,
              "enabled": false,
              "tag": "Untagged",
              "id": -77216,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (362)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -75864,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(18.12219, -33.8467, 10.89545),
                "rotation": new Quaternion(0, -0.01437224, 0, -0.9998967),
                "scale": new Vector3(1.000909, 1.000909, 1.000909)
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
              "parent": -75864,
              "enabled": false,
              "tag": "Untagged",
              "id": -75862,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (165)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -64790,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(14.37979, -42.8857, 4.954215),
                "rotation": new Quaternion(0, 0.4875008, 0, -0.8731226),
                "scale": new Vector3(0.123469, 0.123469, 0.123469)
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
              "parent": -64790,
              "enabled": false,
              "tag": "Untagged",
              "id": -65124,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (400)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -78446,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(14.88919, 16.4843, 4.451045),
                "rotation": new Quaternion(0, 0.4875008, 0, -0.8731226),
                "scale": new Vector3(0.08090678, 0.08090678, 0.08090678)
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
              "parent": -78446,
              "enabled": false,
              "tag": "Untagged",
              "id": -78444,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (368)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -77112,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(13.16699, -39.5197, 6.152255),
                "rotation": new Quaternion(0, 0.4875008, 0, -0.8731226),
                "scale": new Vector3(0.2248079, 0.2248079, 0.2248079)
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
              "parent": -77112,
              "enabled": false,
              "tag": "Untagged",
              "id": -77110,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (336)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -75758,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(11.18419, -33.8467, 8.110754),
                "rotation": new Quaternion(0, 0.4875008, 0, -0.8731226),
                "scale": new Vector3(0.3904746, 0.3904746, 0.3904746)
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
              "parent": -75758,
              "enabled": false,
              "tag": "Untagged",
              "id": -75756,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (158)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -63522,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(19.13659, -19.14, 14.21045),
                "rotation": new Quaternion(0, -0.01437224, 0, -0.9998967),
                "scale": new Vector3(1.449249, 1.449248, 1.449249)
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
              "parent": -63522,
              "enabled": false,
              "tag": "Untagged",
              "id": -63520,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (166)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -64792,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(9.090919, -19.14, 10.1785),
                "rotation": new Quaternion(0, 0.4875008, 0, -0.8731226),
                "scale": new Vector3(0.5653808, 0.5653808, 0.5653808)
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
              "parent": -64792,
              "enabled": false,
              "tag": "Untagged",
              "id": -65326,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (126)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -62554,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(18.41889, 6.9033, 11.74785),
                "rotation": new Quaternion(0, -0.01437224, 0, -0.9998967),
                "scale": new Vector3(1.116197, 1.116197, 1.116197)
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
              "parent": -62554,
              "enabled": false,
              "tag": "Untagged",
              "id": -62552,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (167)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -64794,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(10.68179, 6.9033, 8.642454),
                "rotation": new Quaternion(0, 0.4875008, 0, -0.8731226),
                "scale": new Vector3(0.4354506, 0.4354506, 0.4354506)
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
              "parent": -64794,
              "enabled": false,
              "tag": "Untagged",
              "id": -64822,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (322)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -70614,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(10.68179, 6.9033, 8.642454),
                "rotation": new Quaternion(0, 0.4875008, 0, -0.8731226),
                "scale": new Vector3(0.4354506, 0.4354506, 0.4354506)
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
              "parent": -70614,
              "enabled": false,
              "tag": "Untagged",
              "id": -70612,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (94)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -61594,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(19.13659, 0, 14.21045),
                "rotation": new Quaternion(0, -0.01437224, 0, -0.9998967),
                "scale": new Vector3(1.449249, 1.449248, 1.449249)
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
              "parent": -61594,
              "enabled": false,
              "tag": "Untagged",
              "id": -61592,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (168)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -64796,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(9.090919, 0, 10.1785),
                "rotation": new Quaternion(0, 0.4875008, 0, -0.8731226),
                "scale": new Vector3(0.5653808, 0.5653808, 0.5653808)
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
              "parent": -64796,
              "enabled": false,
              "tag": "Untagged",
              "id": -64824,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (15)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -55696,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(12.64549, -3.7137, 5.594154),
                "rotation": new Quaternion(0, 0.6968701, 0, -0.7171975),
                "scale": new Vector3(0.92045, 0.92045, 0.92045)
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
              "parent": -55696,
              "enabled": false,
              "tag": "Untagged",
              "id": -55694,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (257)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -65126,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(13.30729, -3.713699, 0.2488818),
                "rotation": new Quaternion(0, 0.9621056, 0, -0.2726772),
                "scale": new Vector3(0.359086, 0.3590859, 0.359086)
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
              "parent": -65126,
              "enabled": false,
              "tag": "Untagged",
              "id": -65190,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (33)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -60460,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(12.64549, -28.2474, 5.594154),
                "rotation": new Quaternion(0, 0.6968701, 0, -0.7171975),
                "scale": new Vector3(0.92045, 0.92045, 0.92045)
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
              "parent": -60460,
              "enabled": false,
              "tag": "Untagged",
              "id": -60472,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (180)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -64826,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(13.30729, -28.2474, 0.2488818),
                "rotation": new Quaternion(0, 0.9621056, 0, -0.2726772),
                "scale": new Vector3(0.359086, 0.3590859, 0.359086)
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
              "parent": -64826,
              "enabled": false,
              "tag": "Untagged",
              "id": -65140,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (129)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -63406,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(12.64549, -14.2937, 5.594154),
                "rotation": new Quaternion(0, 0.6968701, 0, -0.7171975),
                "scale": new Vector3(0.92045, 0.92045, 0.92045)
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
              "parent": -63406,
              "enabled": false,
              "tag": "Untagged",
              "id": -63430,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (169)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -64798,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(13.30729, -14.2937, 0.2488818),
                "rotation": new Quaternion(0, 0.9621056, 0, -0.2726772),
                "scale": new Vector3(0.359086, 0.3590859, 0.359086)
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
              "parent": -64798,
              "enabled": false,
              "tag": "Untagged",
              "id": -64828,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (97)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -62438,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(15.11069, 12.0203, 5.144275),
                "rotation": new Quaternion(0, 0.6968701, 0, -0.7171975),
                "scale": new Vector3(0.5624778, 0.5624778, 0.5624778)
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
              "parent": -62438,
              "enabled": false,
              "tag": "Untagged",
              "id": -62462,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (181)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -64830,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(15.51509, 12.0203, 1.877855),
                "rotation": new Quaternion(0, 0.9621056, 0, -0.2726772),
                "scale": new Vector3(0.2194338, 0.2194338, 0.2194338)
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
              "parent": -64830,
              "enabled": false,
              "tag": "Untagged",
              "id": -65000,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (65)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -61478,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(13.41949, 5.2373, 5.111674),
                "rotation": new Quaternion(0, 0.6968701, 0, -0.7171975),
                "scale": new Vector3(0.7089214, 0.7089214, 0.7089214)
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
              "parent": -61478,
              "enabled": false,
              "tag": "Untagged",
              "id": -61502,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (182)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -64832,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(13.92919, 5.2373, 0.9947546),
                "rotation": new Quaternion(0, 0.9621056, 0, -0.2726772),
                "scale": new Vector3(0.2765644, 0.2765644, 0.2765644)
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
              "parent": -64832,
              "enabled": false,
              "tag": "Untagged",
              "id": -65002,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (16)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -57540,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(20.24949, -8.559999, 13.65385),
                "rotation": new Quaternion(0, -0.01437224, 0, -0.9998967),
                "scale": new Vector3(1.449249, 1.449248, 1.449249)
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
              "parent": -57540,
              "enabled": false,
              "tag": "Untagged",
              "id": -57542,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (274)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -65194,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(10.1294, -8.559999, 10.86399),
                "rotation": new Quaternion(0, 0.4875008, 0, -0.8731226),
                "scale": new Vector3(0.5653808, 0.5653808, 0.5653808)
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
              "parent": -65194,
              "enabled": false,
              "tag": "Untagged",
              "id": -65192,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (39)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -60476,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(16.81659, -42.8857, 5.713154),
                "rotation": new Quaternion(0, -0.01437224, 0, -0.9998967),
                "scale": new Vector3(0.3164899, 0.3164898, 0.3164899)
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
              "parent": -60476,
              "enabled": false,
              "tag": "Untagged",
              "id": -60474,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (401)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -78448,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(16.48589, 16.4843, 4.948364),
                "rotation": new Quaternion(0, -0.01437224, 0, -0.9998967),
                "scale": new Vector3(0.2073895, 0.2073895, 0.2073895)
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
              "parent": -78448,
              "enabled": false,
              "tag": "Untagged",
              "id": -78508,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (369)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -77114,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(17.60389, -39.5197, 7.534154),
                "rotation": new Quaternion(0, -0.01437224, 0, -0.9998967),
                "scale": new Vector3(0.5762533, 0.5762533, 0.5762533)
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
              "parent": -77114,
              "enabled": false,
              "tag": "Untagged",
              "id": -77174,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (337)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -75760,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(18.89079, -33.8467, 10.51095),
                "rotation": new Quaternion(0, -0.01437224, 0, -0.9998967),
                "scale": new Vector3(1.000909, 1.000909, 1.000909)
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
              "parent": -75760,
              "enabled": false,
              "tag": "Untagged",
              "id": -75820,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (183)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -64834,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(14.60649, -42.8857, 5.103934),
                "rotation": new Quaternion(0, 0.4875008, 0, -0.8731226),
                "scale": new Vector3(0.123469, 0.123469, 0.123469)
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
              "parent": -64834,
              "enabled": false,
              "tag": "Untagged",
              "id": -65142,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (402)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -78452,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(15.03769, 16.4843, 4.549153),
                "rotation": new Quaternion(0, 0.4875008, 0, -0.8731226),
                "scale": new Vector3(0.08090678, 0.08090678, 0.08090678)
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
              "parent": -78452,
              "enabled": false,
              "tag": "Untagged",
              "id": -78450,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (370)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -77118,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(13.57989, -39.5197, 6.424854),
                "rotation": new Quaternion(0, 0.4875008, 0, -0.8731226),
                "scale": new Vector3(0.2248079, 0.2248079, 0.2248079)
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
              "parent": -77118,
              "enabled": false,
              "tag": "Untagged",
              "id": -77116,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (338)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -75764,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(11.90139, -33.8467, 8.584254),
                "rotation": new Quaternion(0, 0.4875008, 0, -0.8731226),
                "scale": new Vector3(0.3904746, 0.3904746, 0.3904746)
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
              "parent": -75764,
              "enabled": false,
              "tag": "Untagged",
              "id": -75762,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (130)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -63408,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(20.24949, -19.14, 13.65385),
                "rotation": new Quaternion(0, -0.01437224, 0, -0.9998967),
                "scale": new Vector3(1.449249, 1.449248, 1.449249)
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
              "parent": -63408,
              "enabled": false,
              "tag": "Untagged",
              "id": -63432,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (170)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -64800,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(10.1294, -19.14, 10.86399),
                "rotation": new Quaternion(0, 0.4875008, 0, -0.8731226),
                "scale": new Vector3(0.5653808, 0.5653808, 0.5653808)
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
              "parent": -64800,
              "enabled": false,
              "tag": "Untagged",
              "id": -64836,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (98)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -62440,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(19.27599, 6.9033, 11.31915),
                "rotation": new Quaternion(0, -0.01437224, 0, -0.9998967),
                "scale": new Vector3(1.116197, 1.116197, 1.116197)
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
              "parent": -62440,
              "enabled": false,
              "tag": "Untagged",
              "id": -62464,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (184)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -64838,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(11.48159, 6.9033, 9.170454),
                "rotation": new Quaternion(0, 0.4875008, 0, -0.8731226),
                "scale": new Vector3(0.4354506, 0.4354506, 0.4354506)
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
              "parent": -64838,
              "enabled": false,
              "tag": "Untagged",
              "id": -65004,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (320)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -70606,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(11.48159, 6.9033, 9.170454),
                "rotation": new Quaternion(0, 0.4875008, 0, -0.8731226),
                "scale": new Vector3(0.4354506, 0.4354506, 0.4354506)
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
              "parent": -70606,
              "enabled": false,
              "tag": "Untagged",
              "id": -70604,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (66)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -61480,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(20.24949, 0, 13.65385),
                "rotation": new Quaternion(0, -0.01437224, 0, -0.9998967),
                "scale": new Vector3(1.449249, 1.449248, 1.449249)
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
              "parent": -61480,
              "enabled": false,
              "tag": "Untagged",
              "id": -61504,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (185)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -64840,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(10.1294, 0, 10.86399),
                "rotation": new Quaternion(0, 0.4875008, 0, -0.8731226),
                "scale": new Vector3(0.5653808, 0.5653808, 0.5653808)
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
              "parent": -64840,
              "enabled": false,
              "tag": "Untagged",
              "id": -65006,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (14)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -55664,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(16.19549, -3.7737, 10.19415),
                "rotation": new Quaternion(0, 0.6968701, 0, -0.7171975),
                "scale": new Vector3(0.92045, 0.92045, 0.92045)
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
              "parent": -55664,
              "enabled": false,
              "tag": "Untagged",
              "id": -55662,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (258)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -65128,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(11.09858, -3.7737, 5.623275),
                "rotation": new Quaternion(0, 0.9621056, 0, -0.2726772),
                "scale": new Vector3(0.359086, 0.3590859, 0.359086)
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
              "parent": -65128,
              "enabled": false,
              "tag": "Untagged",
              "id": -65196,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (40)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -60478,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(16.19549, -28.3074, 10.19415),
                "rotation": new Quaternion(0, 0.6968701, 0, -0.7171975),
                "scale": new Vector3(0.92045, 0.92045, 0.92045)
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
              "parent": -60478,
              "enabled": false,
              "tag": "Untagged",
              "id": -60480,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (186)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -64842,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(11.09858, -28.3074, 5.623275),
                "rotation": new Quaternion(0, 0.9621056, 0, -0.2726772),
                "scale": new Vector3(0.359086, 0.3590859, 0.359086)
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
              "parent": -64842,
              "enabled": false,
              "tag": "Untagged",
              "id": -65144,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (131)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -63410,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(16.19549, -14.3537, 10.19415),
                "rotation": new Quaternion(0, 0.6968701, 0, -0.7171975),
                "scale": new Vector3(0.92045, 0.92045, 0.92045)
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
              "parent": -63410,
              "enabled": false,
              "tag": "Untagged",
              "id": -63444,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (171)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -64802,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(11.09858, -14.3537, 5.623275),
                "rotation": new Quaternion(0, 0.9621056, 0, -0.2726772),
                "scale": new Vector3(0.359086, 0.3590859, 0.359086)
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
              "parent": -64802,
              "enabled": false,
              "tag": "Untagged",
              "id": -64844,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (99)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -62442,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(17.27999, 11.9843, 7.955255),
                "rotation": new Quaternion(0, 0.6968701, 0, -0.7171975),
                "scale": new Vector3(0.5624778, 0.5624778, 0.5624778)
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
              "parent": -62442,
              "enabled": false,
              "tag": "Untagged",
              "id": -62476,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (187)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -64846,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(14.16539, 11.9843, 5.162065),
                "rotation": new Quaternion(0, 0.9621056, 0, -0.2726772),
                "scale": new Vector3(0.2194338, 0.2194338, 0.2194338)
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
              "parent": -64846,
              "enabled": false,
              "tag": "Untagged",
              "id": -65008,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (67)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -61482,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(16.15369, 5.1913, 8.654554),
                "rotation": new Quaternion(0, 0.6968701, 0, -0.7171975),
                "scale": new Vector3(0.7089214, 0.7089214, 0.7089214)
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
              "parent": -61482,
              "enabled": false,
              "tag": "Untagged",
              "id": -61516,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (188)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -64848,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(12.22809, 5.1913, 5.134094),
                "rotation": new Quaternion(0, 0.9621056, 0, -0.2726772),
                "scale": new Vector3(0.2765644, 0.2765644, 0.2765644)
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
              "parent": -64848,
              "enabled": false,
              "tag": "Untagged",
              "id": -65012,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (17)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -57544,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(23.86849, -8.559999, 12.26215),
                "rotation": new Quaternion(0, -0.01437224, 0, -0.9998967),
                "scale": new Vector3(1.449249, 1.449248, 1.449249)
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
              "parent": -57544,
              "enabled": false,
              "tag": "Untagged",
              "id": -57546,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (259)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -65130,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(13.14415, -8.559999, 13.30228),
                "rotation": new Quaternion(0, 0.4875008, 0, -0.8731226),
                "scale": new Vector3(0.5653808, 0.5653808, 0.5653808)
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
              "parent": -65130,
              "enabled": false,
              "tag": "Untagged",
              "id": -65198,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (34)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -60462,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(17.60699, -42.8857, 5.409245),
                "rotation": new Quaternion(0, -0.01437224, 0, -0.9998967),
                "scale": new Vector3(0.3164899, 0.3164898, 0.3164899)
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
              "parent": -60462,
              "enabled": false,
              "tag": "Untagged",
              "id": -60490,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (418)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -78512,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(17.00389, 16.4843, 4.749215),
                "rotation": new Quaternion(0, -0.01437224, 0, -0.9998967),
                "scale": new Vector3(0.2073895, 0.2073895, 0.2073895)
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
              "parent": -78512,
              "enabled": false,
              "tag": "Untagged",
              "id": -78510,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (386)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -77178,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(19.04309, -39.5197, 6.980754),
                "rotation": new Quaternion(0, -0.01437224, 0, -0.9998967),
                "scale": new Vector3(0.5762533, 0.5762533, 0.5762533)
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
              "parent": -77178,
              "enabled": false,
              "tag": "Untagged",
              "id": -77176,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (354)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -75824,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(21.39049, -33.8467, 9.549854),
                "rotation": new Quaternion(0, -0.01437224, 0, -0.9998967),
                "scale": new Vector3(1.000909, 1.000909, 1.000909)
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
              "parent": -75824,
              "enabled": false,
              "tag": "Untagged",
              "id": -75822,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (189)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -64850,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(15.26489, -42.8857, 5.636354),
                "rotation": new Quaternion(0, 0.4875008, 0, -0.8731226),
                "scale": new Vector3(0.123469, 0.123469, 0.123469)
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
              "parent": -64850,
              "enabled": false,
              "tag": "Untagged",
              "id": -65132,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (403)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -78456,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(15.46909, 16.4843, 4.898035),
                "rotation": new Quaternion(0, 0.4875008, 0, -0.8731226),
                "scale": new Vector3(0.08090678, 0.08090678, 0.08090678)
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
              "parent": -78456,
              "enabled": false,
              "tag": "Untagged",
              "id": -78454,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (371)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -77122,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(14.77869, -39.5197, 7.394355),
                "rotation": new Quaternion(0, 0.4875008, 0, -0.8731226),
                "scale": new Vector3(0.2248079, 0.2248079, 0.2248079)
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
              "parent": -77122,
              "enabled": false,
              "tag": "Untagged",
              "id": -77120,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (339)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -75768,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(13.98359, -33.8467, 10.26815),
                "rotation": new Quaternion(0, 0.4875008, 0, -0.8731226),
                "scale": new Vector3(0.3904746, 0.3904746, 0.3904746)
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
              "parent": -75768,
              "enabled": false,
              "tag": "Untagged",
              "id": -75766,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (140)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -63436,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(23.86849, -19.14, 12.26215),
                "rotation": new Quaternion(0, -0.01437224, 0, -0.9998967),
                "scale": new Vector3(1.449249, 1.449248, 1.449249)
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
              "parent": -63436,
              "enabled": false,
              "tag": "Untagged",
              "id": -63434,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (172)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -64804,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(13.14415, -19.14, 13.30228),
                "rotation": new Quaternion(0, 0.4875008, 0, -0.8731226),
                "scale": new Vector3(0.5653808, 0.5653808, 0.5653808)
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
              "parent": -64804,
              "enabled": false,
              "tag": "Untagged",
              "id": -64858,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (108)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -62468,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(22.06349, 6.9033, 10.24725),
                "rotation": new Quaternion(0, -0.01437224, 0, -0.9998967),
                "scale": new Vector3(1.116197, 1.116197, 1.116197)
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
              "parent": -62468,
              "enabled": false,
              "tag": "Untagged",
              "id": -62466,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (190)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -64852,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(13.80359, 6.9033, 11.04836),
                "rotation": new Quaternion(0, 0.4875008, 0, -0.8731226),
                "scale": new Vector3(0.4354506, 0.4354506, 0.4354506)
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
              "parent": -64852,
              "enabled": false,
              "tag": "Untagged",
              "id": -65014,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (321)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -70610,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(13.80359, 6.9033, 11.04836),
                "rotation": new Quaternion(0, 0.4875008, 0, -0.8731226),
                "scale": new Vector3(0.4354506, 0.4354506, 0.4354506)
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
              "parent": -70610,
              "enabled": false,
              "tag": "Untagged",
              "id": -70608,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (76)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -61508,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(23.86849, 0, 12.26215),
                "rotation": new Quaternion(0, -0.01437224, 0, -0.9998967),
                "scale": new Vector3(1.449249, 1.449248, 1.449249)
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
              "parent": -61508,
              "enabled": false,
              "tag": "Untagged",
              "id": -61506,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (191)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -64854,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(13.14415, 0, 13.30228),
                "rotation": new Quaternion(0, 0.4875008, 0, -0.8731226),
                "scale": new Vector3(0.5653808, 0.5653808, 0.5653808)
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
              "parent": -64854,
              "enabled": false,
              "tag": "Untagged",
              "id": -65016,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (13)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -55630,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(19.95549, -3.7137, 13.08415),
                "rotation": new Quaternion(0, 0.6968701, 0, -0.7171975),
                "scale": new Vector3(0.92045, 0.92045, 0.92045)
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
              "parent": -55630,
              "enabled": false,
              "tag": "Untagged",
              "id": -55628,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (275)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -65200,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(10.47577, -3.713699, 10.32453),
                "rotation": new Quaternion(0, 0.9621056, 0, -0.2726772),
                "scale": new Vector3(0.359086, 0.3590859, 0.359086)
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
              "parent": -65200,
              "enabled": false,
              "tag": "Untagged",
              "id": -65202,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (41)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -60482,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(19.95549, -28.2474, 13.08415),
                "rotation": new Quaternion(0, 0.6968701, 0, -0.7171975),
                "scale": new Vector3(0.92045, 0.92045, 0.92045)
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
              "parent": -60482,
              "enabled": false,
              "tag": "Untagged",
              "id": -60484,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (260)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -65134,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(10.47577, -28.2474, 10.32453),
                "rotation": new Quaternion(0, 0.9621056, 0, -0.2726772),
                "scale": new Vector3(0.359086, 0.3590859, 0.359086)
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
              "parent": -65134,
              "enabled": false,
              "tag": "Untagged",
              "id": -65146,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (142)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -63442,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(19.95549, -14.2937, 13.08415),
                "rotation": new Quaternion(0, 0.6968701, 0, -0.7171975),
                "scale": new Vector3(0.92045, 0.92045, 0.92045)
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
              "parent": -63442,
              "enabled": false,
              "tag": "Untagged",
              "id": -63440,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (192)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -64856,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(10.47577, -14.2937, 10.32453),
                "rotation": new Quaternion(0, 0.9621056, 0, -0.2726772),
                "scale": new Vector3(0.359086, 0.3590859, 0.359086)
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
              "parent": -64856,
              "enabled": false,
              "tag": "Untagged",
              "id": -64860,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (110)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -62474,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(19.57749, 12.0203, 9.721354),
                "rotation": new Quaternion(0, 0.6968701, 0, -0.7171975),
                "scale": new Vector3(0.5624778, 0.5624778, 0.5624778)
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
              "parent": -62474,
              "enabled": false,
              "tag": "Untagged",
              "id": -62472,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (240)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -65010,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(13.78479, 12.0203, 8.034954),
                "rotation": new Quaternion(0, 0.9621056, 0, -0.2726772),
                "scale": new Vector3(0.2194338, 0.2194338, 0.2194338)
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
              "parent": -65010,
              "enabled": false,
              "tag": "Untagged",
              "id": -65018,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (323)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -70618,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(13.78479, 12.0203, 8.034954),
                "rotation": new Quaternion(0, 0.9621056, 0, -0.2726772),
                "scale": new Vector3(0.2194338, 0.2194338, 0.2194338)
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
              "parent": -70618,
              "enabled": false,
              "tag": "Untagged",
              "id": -70616,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (78)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -61514,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(19.04959, 5.2373, 10.88035),
                "rotation": new Quaternion(0, 0.6968701, 0, -0.7171975),
                "scale": new Vector3(0.7089214, 0.7089214, 0.7089214)
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
              "parent": -61514,
              "enabled": false,
              "tag": "Untagged",
              "id": -61512,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (193)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -64862,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(11.74839, 5.2373, 8.754954),
                "rotation": new Quaternion(0, 0.9621056, 0, -0.2726772),
                "scale": new Vector3(0.2765644, 0.2765644, 0.2765644)
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
              "parent": -64862,
              "enabled": false,
              "tag": "Untagged",
              "id": -65020,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (18)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -57548,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(27.76549, -8.559999, 10.03545),
                "rotation": new Quaternion(0, -0.01437224, 0, -0.9998967),
                "scale": new Vector3(1.449249, 1.449248, 1.449249)
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
              "parent": -57548,
              "enabled": false,
              "tag": "Untagged",
              "id": -57550,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (261)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -65136,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(17.02103, -8.559999, 15.56383),
                "rotation": new Quaternion(0, 0.4875008, 0, -0.8731226),
                "scale": new Vector3(0.5653808, 0.5653808, 0.5653808)
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
              "parent": -65136,
              "enabled": false,
              "tag": "Untagged",
              "id": -65204,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (42)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -60488,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(18.45799, -42.8857, 4.922965),
                "rotation": new Quaternion(0, -0.01437224, 0, -0.9998967),
                "scale": new Vector3(0.3164899, 0.3164898, 0.3164899)
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
              "parent": -60488,
              "enabled": false,
              "tag": "Untagged",
              "id": -60486,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (419)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -78514,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(17.56149, 16.4843, 4.430566),
                "rotation": new Quaternion(0, -0.01437224, 0, -0.9998967),
                "scale": new Vector3(0.2073895, 0.2073895, 0.2073895)
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
              "parent": -78514,
              "enabled": false,
              "tag": "Untagged",
              "id": -78516,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (387)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -77180,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(20.59249, -39.5197, 6.095355),
                "rotation": new Quaternion(0, -0.01437224, 0, -0.9998967),
                "scale": new Vector3(0.5762533, 0.5762533, 0.5762533)
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
              "parent": -77180,
              "enabled": false,
              "tag": "Untagged",
              "id": -77182,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (355)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -75826,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(24.08149, -33.8467, 8.011954),
                "rotation": new Quaternion(0, -0.01437224, 0, -0.9998967),
                "scale": new Vector3(1.000909, 1.000909, 1.000909)
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
              "parent": -75826,
              "enabled": false,
              "tag": "Untagged",
              "id": -75828,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (262)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -65138,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(16.11159, -42.8857, 6.130255),
                "rotation": new Quaternion(0, 0.4875008, 0, -0.8731226),
                "scale": new Vector3(0.123469, 0.123469, 0.123469)
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
              "parent": -65138,
              "enabled": false,
              "tag": "Untagged",
              "id": -65148,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (404)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -78460,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(16.02399, 16.4843, 5.221684),
                "rotation": new Quaternion(0, 0.4875008, 0, -0.8731226),
                "scale": new Vector3(0.08090678, 0.08090678, 0.08090678)
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
              "parent": -78460,
              "enabled": false,
              "tag": "Untagged",
              "id": -78458,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (372)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -77126,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(16.32019, -39.5197, 8.293554),
                "rotation": new Quaternion(0, 0.4875008, 0, -0.8731226),
                "scale": new Vector3(0.2248079, 0.2248079, 0.2248079)
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
              "parent": -77126,
              "enabled": false,
              "tag": "Untagged",
              "id": -77124,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (340)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -75772,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(16.66109, -33.8467, 11.83005),
                "rotation": new Quaternion(0, 0.4875008, 0, -0.8731226),
                "scale": new Vector3(0.3904746, 0.3904746, 0.3904746)
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
              "parent": -75772,
              "enabled": false,
              "tag": "Untagged",
              "id": -75770,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (141)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -63438,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(27.76549, -19.14, 10.03545),
                "rotation": new Quaternion(0, -0.01437224, 0, -0.9998967),
                "scale": new Vector3(1.449249, 1.449248, 1.449249)
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
              "parent": -63438,
              "enabled": false,
              "tag": "Untagged",
              "id": -63446,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (194)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -64866,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(17.02103, -19.14, 15.56383),
                "rotation": new Quaternion(0, 0.4875008, 0, -0.8731226),
                "scale": new Vector3(0.5653808, 0.5653808, 0.5653808)
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
              "parent": -64866,
              "enabled": false,
              "tag": "Untagged",
              "id": -64864,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (109)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -62470,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(25.06449, 6.9033, 8.532354),
                "rotation": new Quaternion(0, -0.01437224, 0, -0.9998967),
                "scale": new Vector3(1.116197, 1.116197, 1.116197)
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
              "parent": -62470,
              "enabled": false,
              "tag": "Untagged",
              "id": -62478,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (195)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -64868,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(16.78949, 6.9033, 12.79025),
                "rotation": new Quaternion(0, 0.4875008, 0, -0.8731226),
                "scale": new Vector3(0.4354506, 0.4354506, 0.4354506)
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
              "parent": -64868,
              "enabled": false,
              "tag": "Untagged",
              "id": -65022,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (77)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -61510,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(27.76549, 0, 10.03545),
                "rotation": new Quaternion(0, -0.01437224, 0, -0.9998967),
                "scale": new Vector3(1.449249, 1.449248, 1.449249)
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
              "parent": -61510,
              "enabled": false,
              "tag": "Untagged",
              "id": -61518,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (241)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -65026,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(17.02103, 0, 15.56383),
                "rotation": new Quaternion(0, 0.4875008, 0, -0.8731226),
                "scale": new Vector3(0.5653808, 0.5653808, 0.5653808)
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
              "parent": -65026,
              "enabled": false,
              "tag": "Untagged",
              "id": -65024,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (12)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -55596,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(21.19549, -5.4637, 10.44415),
                "rotation": new Quaternion(0, 0.6968701, 0, -0.7171975),
                "scale": new Vector3(0.92045, 0.92045, 0.92045)
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
              "parent": -55596,
              "enabled": false,
              "tag": "Untagged",
              "id": -55594,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (276)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -65206,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(13.38208, -5.463699, 10.0784),
                "rotation": new Quaternion(0, 0.9621056, 0, -0.2726772),
                "scale": new Vector3(0.359086, 0.3590859, 0.359086)
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
              "parent": -65206,
              "enabled": false,
              "tag": "Untagged",
              "id": -65208,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (43)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -60492,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(21.19549, -29.9974, 10.44415),
                "rotation": new Quaternion(0, 0.6968701, 0, -0.7171975),
                "scale": new Vector3(0.92045, 0.92045, 0.92045)
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
              "parent": -60492,
              "enabled": false,
              "tag": "Untagged",
              "id": -60494,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (263)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -65152,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(15.31689, -42.2097, 4.932354),
                "rotation": new Quaternion(0, 0.9621056, 0, -0.2726772),
                "scale": new Vector3(0.07841793, 0.07841793, 0.07841793)
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
              "parent": -65152,
              "enabled": false,
              "tag": "Untagged",
              "id": -65150,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (397)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -78438,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(15.50319, 16.9273, 4.436719),
                "rotation": new Quaternion(0, 0.9621056, 0, -0.2726772),
                "scale": new Vector3(0.0513857, 0.0513857, 0.0513857)
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
              "parent": -78438,
              "enabled": false,
              "tag": "Untagged",
              "id": -78462,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (365)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -77104,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(14.87329, -38.2897, 6.112454),
                "rotation": new Quaternion(0, 0.9621056, 0, -0.2726772),
                "scale": new Vector3(0.1427805, 0.1427805, 0.1427805)
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
              "parent": -77104,
              "enabled": false,
              "tag": "Untagged",
              "id": -77128,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (333)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -75750,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(14.14789, -31.7087, 8.041655),
                "rotation": new Quaternion(0, 0.9621056, 0, -0.2726772),
                "scale": new Vector3(0.2479991, 0.2479991, 0.2479991)
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
              "parent": -75750,
              "enabled": false,
              "tag": "Untagged",
              "id": -75774,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (143)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -63450,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(21.19549, -16.0437, 10.44415),
                "rotation": new Quaternion(0, 0.6968701, 0, -0.7171975),
                "scale": new Vector3(0.92045, 0.92045, 0.92045)
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
              "parent": -63450,
              "enabled": false,
              "tag": "Untagged",
              "id": -63448,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (173)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -64806,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(13.38208, -16.0437, 10.0784),
                "rotation": new Quaternion(0, 0.9621056, 0, -0.2726772),
                "scale": new Vector3(0.359086, 0.3590859, 0.359086)
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
              "parent": -64806,
              "enabled": false,
              "tag": "Untagged",
              "id": -64870,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (111)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -62482,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(20.33549, 10.9513, 8.108054),
                "rotation": new Quaternion(0, 0.6968701, 0, -0.7171975),
                "scale": new Vector3(0.5624778, 0.5624778, 0.5624778)
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
              "parent": -62482,
              "enabled": false,
              "tag": "Untagged",
              "id": -62480,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (196)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -64872,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(15.93029, 10.4513, 6.959954),
                "rotation": new Quaternion(0, 0.9621056, 0, -0.2726772),
                "scale": new Vector3(0.1690058, 0.1690058, 0.1690058)
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
              "parent": -64872,
              "enabled": false,
              "tag": "Untagged",
              "id": -65028,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (79)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -61522,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(21.19549, 3.0963, 10.44415),
                "rotation": new Quaternion(0, 0.6968701, 0, -0.7171975),
                "scale": new Vector3(0.92045, 0.92045, 0.92045)
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
              "parent": -61522,
              "enabled": false,
              "tag": "Untagged",
              "id": -61520,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (197)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -64874,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(13.98679, 3.889501, 8.565354),
                "rotation": new Quaternion(0, 0.9621056, 0, -0.2726772),
                "scale": new Vector3(0.2765644, 0.2765644, 0.2765644)
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
              "parent": -64874,
              "enabled": false,
              "tag": "Untagged",
              "id": -65030,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (19)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -57552,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(29.71349, -11.3154, 6.973655),
                "rotation": new Quaternion(0, -0.01437224, 0, -0.9998967),
                "scale": new Vector3(1.449249, 1.449248, 1.449249)
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
              "parent": -57552,
              "enabled": false,
              "tag": "Untagged",
              "id": -57554,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (264)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -65154,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(20.64663, -11.3154, 15.71994),
                "rotation": new Quaternion(0, 0.4875008, 0, -0.8731226),
                "scale": new Vector3(0.5653808, 0.5653808, 0.5653808)
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
              "parent": -65154,
              "enabled": false,
              "tag": "Untagged",
              "id": -65210,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (44)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -60498,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(18.88309, -43.4877, 4.254324),
                "rotation": new Quaternion(0, -0.01437224, 0, -0.9998967),
                "scale": new Vector3(0.3164899, 0.3164898, 0.3164899)
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
              "parent": -60498,
              "enabled": false,
              "tag": "Untagged",
              "id": -60496,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (405)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -78464,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(17.84009, 16.0893, 3.992414),
                "rotation": new Quaternion(0, -0.01437224, 0, -0.9998967),
                "scale": new Vector3(0.2073895, 0.2073895, 0.2073895)
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
              "parent": -78464,
              "enabled": false,
              "tag": "Untagged",
              "id": -78518,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (373)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -77130,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(21.36649, -40.6157, 4.877924),
                "rotation": new Quaternion(0, -0.01437224, 0, -0.9998967),
                "scale": new Vector3(0.5762533, 0.5762533, 0.5762533)
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
              "parent": -77130,
              "enabled": false,
              "tag": "Untagged",
              "id": -77184,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (341)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -75776,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(25.42649, -35.7497, 5.897355),
                "rotation": new Quaternion(0, -0.01437224, 0, -0.9998967),
                "scale": new Vector3(1.000909, 1.000909, 1.000909)
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
              "parent": -75776,
              "enabled": false,
              "tag": "Untagged",
              "id": -75830,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (198)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -64876,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(16.90329, -43.4877, 6.164354),
                "rotation": new Quaternion(0, 0.4875008, 0, -0.8731226),
                "scale": new Vector3(0.123469, 0.123469, 0.123469)
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
              "parent": -64876,
              "enabled": false,
              "tag": "Untagged",
              "id": -65156,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (406)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -78468,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(16.54279, 16.0893, 5.244024),
                "rotation": new Quaternion(0, 0.4875008, 0, -0.8731226),
                "scale": new Vector3(0.08090678, 0.08090678, 0.08090678)
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
              "parent": -78468,
              "enabled": false,
              "tag": "Untagged",
              "id": -78466,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (374)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -77134,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(17.76179, -40.6157, 8.355655),
                "rotation": new Quaternion(0, 0.4875008, 0, -0.8731226),
                "scale": new Vector3(0.2248079, 0.2248079, 0.2248079)
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
              "parent": -77134,
              "enabled": false,
              "tag": "Untagged",
              "id": -77132,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (342)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -75780,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(19.16509, -35.7497, 11.93795),
                "rotation": new Quaternion(0, 0.4875008, 0, -0.8731226),
                "scale": new Vector3(0.3904746, 0.3904746, 0.3904746)
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
              "parent": -75780,
              "enabled": false,
              "tag": "Untagged",
              "id": -75778,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (132)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -63412,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(29.71349, -21.8954, 6.973655),
                "rotation": new Quaternion(0, -0.01437224, 0, -0.9998967),
                "scale": new Vector3(1.449249, 1.449248, 1.449249)
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
              "parent": -63412,
              "enabled": false,
              "tag": "Untagged",
              "id": -63452,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (199)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -64880,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(20.64663, -21.8954, 15.71994),
                "rotation": new Quaternion(0, 0.4875008, 0, -0.8731226),
                "scale": new Vector3(0.5653808, 0.5653808, 0.5653808)
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
              "parent": -64880,
              "enabled": false,
              "tag": "Untagged",
              "id": -64878,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (100)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -62444,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(26.56549, 4.781301, 6.174154),
                "rotation": new Quaternion(0, -0.01437224, 0, -0.9998967),
                "scale": new Vector3(1.116197, 1.116197, 1.116197)
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
              "parent": -62444,
              "enabled": false,
              "tag": "Untagged",
              "id": -62484,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (242)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -65034,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(19.58149, 4.781301, 12.91045),
                "rotation": new Quaternion(0, 0.4875008, 0, -0.8731226),
                "scale": new Vector3(0.4354506, 0.4354506, 0.4354506)
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
              "parent": -65034,
              "enabled": false,
              "tag": "Untagged",
              "id": -65032,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (68)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -61484,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(29.71349, -2.7554, 6.973655),
                "rotation": new Quaternion(0, -0.01437224, 0, -0.9998967),
                "scale": new Vector3(1.449249, 1.449248, 1.449249)
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
              "parent": -61484,
              "enabled": false,
              "tag": "Untagged",
              "id": -61524,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (200)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -64882,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(20.64663, -2.755401, 15.71994),
                "rotation": new Quaternion(0, 0.4875008, 0, -0.8731226),
                "scale": new Vector3(0.5653808, 0.5653808, 0.5653808)
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
              "parent": -64882,
              "enabled": false,
              "tag": "Untagged",
              "id": -65036,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (11)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -55562,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(23.44549, -0.9336996, 9.194155),
                "rotation": new Quaternion(0, 0.6968701, 0, -0.7171975),
                "scale": new Vector3(0.92045, 0.92045, 0.92045)
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
              "parent": -55562,
              "enabled": false,
              "tag": "Untagged",
              "id": -55560,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (277)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -65212,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(15.58961, -0.9336996, 11.40195),
                "rotation": new Quaternion(0, 0.9621056, 0, -0.2726772),
                "scale": new Vector3(0.359086, 0.3590859, 0.359086)
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
              "parent": -65212,
              "enabled": false,
              "tag": "Untagged",
              "id": -65214,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (45)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -60500,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(23.44549, -25.4674, 9.194155),
                "rotation": new Quaternion(0, 0.6968701, 0, -0.7171975),
                "scale": new Vector3(0.92045, 0.92045, 0.92045)
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
              "parent": -60500,
              "enabled": false,
              "tag": "Untagged",
              "id": -60502,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (201)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -64884,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(15.58961, -25.4674, 11.40195),
                "rotation": new Quaternion(0, 0.9621056, 0, -0.2726772),
                "scale": new Vector3(0.359086, 0.3590859, 0.359086)
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
              "parent": -64884,
              "enabled": false,
              "tag": "Untagged",
              "id": -65168,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (144)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -63456,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(23.44549, -11.5137, 9.194155),
                "rotation": new Quaternion(0, 0.6968701, 0, -0.7171975),
                "scale": new Vector3(0.92045, 0.92045, 0.92045)
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
              "parent": -63456,
              "enabled": false,
              "tag": "Untagged",
              "id": -63454,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (174)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -64808,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(15.58961, -11.5137, 11.40195),
                "rotation": new Quaternion(0, 0.9621056, 0, -0.2726772),
                "scale": new Vector3(0.359086, 0.3590859, 0.359086)
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
              "parent": -64808,
              "enabled": false,
              "tag": "Untagged",
              "id": -64886,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (112)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -62488,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(21.71049, 13.7193, 7.344154),
                "rotation": new Quaternion(0, 0.6968701, 0, -0.7171975),
                "scale": new Vector3(0.5624778, 0.5624778, 0.5624778)
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
              "parent": -62488,
              "enabled": false,
              "tag": "Untagged",
              "id": -62486,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (202)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -64888,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(16.90979, 13.7193, 8.693355),
                "rotation": new Quaternion(0, 0.9621056, 0, -0.2726772),
                "scale": new Vector3(0.2194338, 0.2194338, 0.2194338)
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
              "parent": -64888,
              "enabled": false,
              "tag": "Untagged",
              "id": -65038,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (80)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -61528,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(21.73749, 7.378301, 7.884355),
                "rotation": new Quaternion(0, 0.6968701, 0, -0.7171975),
                "scale": new Vector3(0.7089214, 0.7089214, 0.7089214)
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
              "parent": -61528,
              "enabled": false,
              "tag": "Untagged",
              "id": -61526,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (203)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -64890,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(15.68699, 7.378301, 9.584755),
                "rotation": new Quaternion(0, 0.9621056, 0, -0.2726772),
                "scale": new Vector3(0.2765644, 0.2765644, 0.2765644)
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
              "parent": -64890,
              "enabled": false,
              "tag": "Untagged",
              "id": -65040,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (20)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -57556,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(30.82649, -4.1828, 3.076954),
                "rotation": new Quaternion(0, -0.01437224, 0, -0.9998967),
                "scale": new Vector3(1.449249, 1.449248, 1.449249)
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
              "parent": -57556,
              "enabled": false,
              "tag": "Untagged",
              "id": -57558,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (265)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -65158,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(24.57777, -4.182799, 14.73547),
                "rotation": new Quaternion(0, 0.4875008, 0, -0.8731226),
                "scale": new Vector3(0.5653808, 0.5653808, 0.5653808)
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
              "parent": -65158,
              "enabled": false,
              "tag": "Untagged",
              "id": -65216,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (35)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -60464,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(30.82649, -28.7165, 3.076954),
                "rotation": new Quaternion(0, -0.01437224, 0, -0.9998967),
                "scale": new Vector3(1.449249, 1.449248, 1.449249)
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
              "parent": -60464,
              "enabled": false,
              "tag": "Untagged",
              "id": -60512,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (204)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -64892,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(24.57777, -28.7165, 14.73547),
                "rotation": new Quaternion(0, 0.4875008, 0, -0.8731226),
                "scale": new Vector3(0.5653808, 0.5653808, 0.5653808)
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
              "parent": -64892,
              "enabled": false,
              "tag": "Untagged",
              "id": -65160,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (145)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -63460,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(30.82649, -14.7628, 3.076954),
                "rotation": new Quaternion(0, -0.01437224, 0, -0.9998967),
                "scale": new Vector3(1.449249, 1.449248, 1.449249)
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
              "parent": -63460,
              "enabled": false,
              "tag": "Untagged",
              "id": -63458,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (175)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -64810,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(24.57777, -14.7628, 14.73547),
                "rotation": new Quaternion(0, 0.4875008, 0, -0.8731226),
                "scale": new Vector3(0.5653808, 0.5653808, 0.5653808)
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
              "parent": -64810,
              "enabled": false,
              "tag": "Untagged",
              "id": -64894,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (113)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -62492,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(26.22049, 11.7343, 3.606035),
                "rotation": new Quaternion(0, -0.01437224, 0, -0.9998967),
                "scale": new Vector3(0.8856212, 0.8856212, 0.8856212)
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
              "parent": -62492,
              "enabled": false,
              "tag": "Untagged",
              "id": -62490,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (205)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -64896,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(22.40249, 11.7343, 10.73045),
                "rotation": new Quaternion(0, 0.4875008, 0, -0.8731226),
                "scale": new Vector3(0.3454986, 0.3454986, 0.3454986)
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
              "parent": -64896,
              "enabled": false,
              "tag": "Untagged",
              "id": -65052,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (81)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -61532,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(27.42249, 4.876301, 3.172955),
                "rotation": new Quaternion(0, -0.01437224, 0, -0.9998967),
                "scale": new Vector3(1.116197, 1.116197, 1.116197)
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
              "parent": -61532,
              "enabled": false,
              "tag": "Untagged",
              "id": -61530,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (206)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -64898,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(22.60949, 4.876301, 12.15225),
                "rotation": new Quaternion(0, 0.4875008, 0, -0.8731226),
                "scale": new Vector3(0.4354506, 0.4354506, 0.4354506)
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
              "parent": -64898,
              "enabled": false,
              "tag": "Untagged",
              "id": -65042,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (10)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -55530,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(25.19549, -7.0637, 6.944155),
                "rotation": new Quaternion(0, 0.6968701, 0, -0.7171975),
                "scale": new Vector3(0.92045, 0.92045, 0.92045)
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
              "parent": -55530,
              "enabled": false,
              "tag": "Untagged",
              "id": -55528,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (278)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -65218,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(18.41317, -7.0637, 11.79249),
                "rotation": new Quaternion(0, 0.9621056, 0, -0.2726772),
                "scale": new Vector3(0.359086, 0.3590859, 0.359086)
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
              "parent": -65218,
              "enabled": false,
              "tag": "Untagged",
              "id": -65220,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (46)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -60504,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(17.89669, -42.5597, 4.247904),
                "rotation": new Quaternion(0, 0.6968701, 0, -0.7171975),
                "scale": new Vector3(0.2010098, 0.2010098, 0.2010098)
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
              "parent": -60504,
              "enabled": false,
              "tag": "Untagged",
              "id": -60506,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (420)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -78522,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(17.19369, 16.6973, 3.988214),
                "rotation": new Quaternion(0, 0.6968701, 0, -0.7171975),
                "scale": new Vector3(0.1317177, 0.1317177, 0.1317177)
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
              "parent": -78522,
              "enabled": false,
              "tag": "Untagged",
              "id": -78520,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (388)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -77188,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(19.57049, -38.9257, 4.866234),
                "rotation": new Quaternion(0, 0.6968701, 0, -0.7171975),
                "scale": new Vector3(0.3659913, 0.3659913, 0.3659913)
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
              "parent": -77188,
              "enabled": false,
              "tag": "Untagged",
              "id": -77186,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (356)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -75834,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(22.30649, -32.8137, 5.877054),
                "rotation": new Quaternion(0, 0.6968701, 0, -0.7171975),
                "scale": new Vector3(0.6356996, 0.6356996, 0.6356996)
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
              "parent": -75834,
              "enabled": false,
              "tag": "Untagged",
              "id": -75832,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (266)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -65162,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(16.41559, -42.5597, 5.306705),
                "rotation": new Quaternion(0, 0.9621056, 0, -0.2726772),
                "scale": new Vector3(0.07841793, 0.07841793, 0.07841793)
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
              "parent": -65162,
              "enabled": false,
              "tag": "Untagged",
              "id": -65170,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (407)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -78472,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(16.22319, 16.6973, 4.682024),
                "rotation": new Quaternion(0, 0.9621056, 0, -0.2726772),
                "scale": new Vector3(0.0513857, 0.0513857, 0.0513857)
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
              "parent": -78472,
              "enabled": false,
              "tag": "Untagged",
              "id": -78470,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (375)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -77138,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(16.87369, -38.9257, 6.794055),
                "rotation": new Quaternion(0, 0.9621056, 0, -0.2726772),
                "scale": new Vector3(0.1427805, 0.1427805, 0.1427805)
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
              "parent": -77138,
              "enabled": false,
              "tag": "Untagged",
              "id": -77136,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (343)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -75784,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(17.62249, -32.8137, 9.225454),
                "rotation": new Quaternion(0, 0.9621056, 0, -0.2726772),
                "scale": new Vector3(0.2479991, 0.2479991, 0.2479991)
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
              "parent": -75784,
              "enabled": false,
              "tag": "Untagged",
              "id": -75782,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (147)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -63466,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(25.19549, -17.6437, 6.944155),
                "rotation": new Quaternion(0, 0.6968701, 0, -0.7171975),
                "scale": new Vector3(0.92045, 0.92045, 0.92045)
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
              "parent": -63466,
              "enabled": false,
              "tag": "Untagged",
              "id": -63464,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (176)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -64812,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(18.41317, -17.6437, 11.79249),
                "rotation": new Quaternion(0, 0.9621056, 0, -0.2726772),
                "scale": new Vector3(0.359086, 0.3590859, 0.359086)
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
              "parent": -64812,
              "enabled": false,
              "tag": "Untagged",
              "id": -64900,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (115)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -62498,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(23.08549, 8.0563, 6.151454),
                "rotation": new Quaternion(0, 0.6968701, 0, -0.7171975),
                "scale": new Vector3(0.7089214, 0.7089214, 0.7089214)
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
              "parent": -62498,
              "enabled": false,
              "tag": "Untagged",
              "id": -62496,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (207)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -64902,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(17.86169, 8.0563, 9.885554),
                "rotation": new Quaternion(0, 0.9621056, 0, -0.2726772),
                "scale": new Vector3(0.2765644, 0.2765644, 0.2765644)
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
              "parent": -64902,
              "enabled": false,
              "tag": "Untagged",
              "id": -65044,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (83)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -61538,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(25.19549, 1.4963, 6.944155),
                "rotation": new Quaternion(0, 0.6968701, 0, -0.7171975),
                "scale": new Vector3(0.92045, 0.92045, 0.92045)
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
              "parent": -61538,
              "enabled": false,
              "tag": "Untagged",
              "id": -61536,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (208)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -64904,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(18.41317, 1.496301, 11.79249),
                "rotation": new Quaternion(0, 0.9621056, 0, -0.2726772),
                "scale": new Vector3(0.359086, 0.3590859, 0.359086)
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
              "parent": -64904,
              "enabled": false,
              "tag": "Untagged",
              "id": -65046,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (21)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -57560,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(30.27049, -13.8346, -1.376445),
                "rotation": new Quaternion(0, -0.01437224, 0, -0.9998967),
                "scale": new Vector3(1.449249, 1.449248, 1.449249)
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
              "parent": -57560,
              "enabled": false,
              "tag": "Untagged",
              "id": -57562,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (267)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -65164,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(28.15653, -13.8346, 12.02726),
                "rotation": new Quaternion(0, 0.4875008, 0, -0.8731226),
                "scale": new Vector3(0.5653808, 0.5653808, 0.5653808)
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
              "parent": -65164,
              "enabled": false,
              "tag": "Untagged",
              "id": -65222,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (47)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -60510,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(19.00499, -44.0377, 2.430855),
                "rotation": new Quaternion(0, -0.01437224, 0, -0.9998967),
                "scale": new Vector3(0.3164899, 0.3164898, 0.3164899)
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
              "parent": -60510,
              "enabled": false,
              "tag": "Untagged",
              "id": -60508,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (408)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -78474,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(17.91999, 15.7293, 2.797554),
                "rotation": new Quaternion(0, -0.01437224, 0, -0.9998967),
                "scale": new Vector3(0.2073895, 0.2073895, 0.2073895)
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
              "parent": -78474,
              "enabled": false,
              "tag": "Untagged",
              "id": -78524,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (376)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -77140,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(21.58849, -41.6177, 1.557755),
                "rotation": new Quaternion(0, -0.01437224, 0, -0.9998967),
                "scale": new Vector3(0.5762533, 0.5762533, 0.5762533)
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
              "parent": -77140,
              "enabled": false,
              "tag": "Untagged",
              "id": -77190,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (344)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -75786,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(25.81149, -37.4897, 0.1304545),
                "rotation": new Quaternion(0, -0.01437224, 0, -0.9998967),
                "scale": new Vector3(1.000909, 1.000909, 1.000909)
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
              "parent": -75786,
              "enabled": false,
              "tag": "Untagged",
              "id": -75836,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (268)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -65166,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(18.54309, -44.0377, 5.357944),
                "rotation": new Quaternion(0, 0.4875008, 0, -0.8731226),
                "scale": new Vector3(0.123469, 0.123469, 0.123469)
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
              "parent": -65166,
              "enabled": false,
              "tag": "Untagged",
              "id": -65172,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (409)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -78476,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(17.61729, 15.7293, 4.715604),
                "rotation": new Quaternion(0, 0.4875008, 0, -0.8731226),
                "scale": new Vector3(0.08090678, 0.08090678, 0.08090678)
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
              "parent": -78476,
              "enabled": false,
              "tag": "Untagged",
              "id": -78484,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (377)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -77142,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(20.74749, -41.6177, 6.887354),
                "rotation": new Quaternion(0, 0.4875008, 0, -0.8731226),
                "scale": new Vector3(0.2248079, 0.2248079, 0.2248079)
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
              "parent": -77142,
              "enabled": false,
              "tag": "Untagged",
              "id": -77150,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (345)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -75788,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(24.35149, -37.4897, 9.387554),
                "rotation": new Quaternion(0, 0.4875008, 0, -0.8731226),
                "scale": new Vector3(0.3904746, 0.3904746, 0.3904746)
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
              "parent": -75788,
              "enabled": false,
              "tag": "Untagged",
              "id": -75796,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (146)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -63462,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(30.27049, -24.4146, -1.376445),
                "rotation": new Quaternion(0, -0.01437224, 0, -0.9998967),
                "scale": new Vector3(1.449249, 1.449248, 1.449249)
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
              "parent": -63462,
              "enabled": false,
              "tag": "Untagged",
              "id": -63468,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (209)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -64908,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(28.15653, -24.4146, 12.02726),
                "rotation": new Quaternion(0, 0.4875008, 0, -0.8731226),
                "scale": new Vector3(0.5653808, 0.5653808, 0.5653808)
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
              "parent": -64908,
              "enabled": false,
              "tag": "Untagged",
              "id": -64906,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (114)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -62494,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(30.27049, 1.7354, -1.376445),
                "rotation": new Quaternion(0, -0.01437224, 0, -0.9998967),
                "scale": new Vector3(1.449249, 1.449248, 1.449249)
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
              "parent": -62494,
              "enabled": false,
              "tag": "Untagged",
              "id": -62500,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (243)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -65050,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(28.15653, 1.7354, 12.02726),
                "rotation": new Quaternion(0, 0.4875008, 0, -0.8731226),
                "scale": new Vector3(0.5653808, 0.5653808, 0.5653808)
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
              "parent": -65050,
              "enabled": false,
              "tag": "Untagged",
              "id": -65048,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (82)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -61534,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(30.27049, -5.2746, -1.376445),
                "rotation": new Quaternion(0, -0.01437224, 0, -0.9998967),
                "scale": new Vector3(1.449249, 1.449248, 1.449249)
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
              "parent": -61534,
              "enabled": false,
              "tag": "Untagged",
              "id": -61540,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (244)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -65056,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(28.15653, -5.2746, 12.02726),
                "rotation": new Quaternion(0, 0.4875008, 0, -0.8731226),
                "scale": new Vector3(0.5653808, 0.5653808, 0.5653808)
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
              "parent": -65056,
              "enabled": false,
              "tag": "Untagged",
              "id": -65054,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (9)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -55498,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(26.19549, -1.133699, 4.694154),
                "rotation": new Quaternion(0, 0.6968701, 0, -0.7171975),
                "scale": new Vector3(0.92045, 0.92045, 0.92045)
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
              "parent": -55498,
              "enabled": false,
              "tag": "Untagged",
              "id": -55496,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (269)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -65174,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(20.86173, -1.133699, 11.53351),
                "rotation": new Quaternion(0, 0.9621056, 0, -0.2726772),
                "scale": new Vector3(0.359086, 0.3590859, 0.359086)
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
              "parent": -65174,
              "enabled": false,
              "tag": "Untagged",
              "id": -65224,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (48)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -60514,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(26.19549, -25.6674, 4.694154),
                "rotation": new Quaternion(0, 0.6968701, 0, -0.7171975),
                "scale": new Vector3(0.92045, 0.92045, 0.92045)
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
              "parent": -60514,
              "enabled": false,
              "tag": "Untagged",
              "id": -60516,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (270)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -65178,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(20.86173, -25.6674, 11.53351),
                "rotation": new Quaternion(0, 0.9621056, 0, -0.2726772),
                "scale": new Vector3(0.359086, 0.3590859, 0.359086)
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
              "parent": -65178,
              "enabled": false,
              "tag": "Untagged",
              "id": -65176,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (133)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -63414,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(26.19549, -11.7137, 4.694154),
                "rotation": new Quaternion(0, 0.6968701, 0, -0.7171975),
                "scale": new Vector3(0.92045, 0.92045, 0.92045)
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
              "parent": -63414,
              "enabled": false,
              "tag": "Untagged",
              "id": -63470,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (210)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -64912,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(20.86173, -11.7137, 11.53351),
                "rotation": new Quaternion(0, 0.9621056, 0, -0.2726772),
                "scale": new Vector3(0.359086, 0.3590859, 0.359086)
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
              "parent": -64912,
              "enabled": false,
              "tag": "Untagged",
              "id": -64910,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (101)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -62446,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(23.39049, 13.5973, 4.594285),
                "rotation": new Quaternion(0, 0.6968701, 0, -0.7171975),
                "scale": new Vector3(0.5624778, 0.5624778, 0.5624778)
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
              "parent": -62446,
              "enabled": false,
              "tag": "Untagged",
              "id": -62502,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (245)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -65060,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(20.13149, 13.5973, 8.773754),
                "rotation": new Quaternion(0, 0.9621056, 0, -0.2726772),
                "scale": new Vector3(0.2194338, 0.2194338, 0.2194338)
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
              "parent": -65060,
              "enabled": false,
              "tag": "Untagged",
              "id": -65058,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (69)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -61486,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(23.85549, 7.2243, 4.418499),
                "rotation": new Quaternion(0, 0.6968701, 0, -0.7171975),
                "scale": new Vector3(0.7089214, 0.7089214, 0.7089214)
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
              "parent": -61486,
              "enabled": false,
              "tag": "Untagged",
              "id": -61542,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (211)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -64914,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(19.74749, 7.2243, 9.686154),
                "rotation": new Quaternion(0, 0.9621056, 0, -0.2726772),
                "scale": new Vector3(0.2765644, 0.2765644, 0.2765644)
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
              "parent": -64914,
              "enabled": false,
              "tag": "Untagged",
              "id": -65062,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (22)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -57564,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(28.87849, -4.4977, -4.994845),
                "rotation": new Quaternion(0, -0.01437224, 0, -0.9998967),
                "scale": new Vector3(1.449249, 1.449248, 1.449249)
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
              "parent": -57564,
              "enabled": false,
              "tag": "Untagged",
              "id": -57566,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (271)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -65180,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(30.59414, -4.4977, 9.012545),
                "rotation": new Quaternion(0, 0.4875008, 0, -0.8731226),
                "scale": new Vector3(0.5653808, 0.5653808, 0.5653808)
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
              "parent": -65180,
              "enabled": false,
              "tag": "Untagged",
              "id": -65226,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (49)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -60520,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(28.87849, -29.0314, -4.994845),
                "rotation": new Quaternion(0, -0.01437224, 0, -0.9998967),
                "scale": new Vector3(1.449249, 1.449248, 1.449249)
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
              "parent": -60520,
              "enabled": false,
              "tag": "Untagged",
              "id": -60518,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (212)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -64916,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(30.59414, -29.0314, 9.012545),
                "rotation": new Quaternion(0, 0.4875008, 0, -0.8731226),
                "scale": new Vector3(0.5653808, 0.5653808, 0.5653808)
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
              "parent": -64916,
              "enabled": false,
              "tag": "Untagged",
              "id": -65182,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (134)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -63416,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(28.87849, -15.0777, -4.994845),
                "rotation": new Quaternion(0, -0.01437224, 0, -0.9998967),
                "scale": new Vector3(1.449249, 1.449248, 1.449249)
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
              "parent": -63416,
              "enabled": false,
              "tag": "Untagged",
              "id": -63472,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (213)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -64920,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(30.59414, -15.0777, 9.012545),
                "rotation": new Quaternion(0, 0.4875008, 0, -0.8731226),
                "scale": new Vector3(0.5653808, 0.5653808, 0.5653808)
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
              "parent": -64920,
              "enabled": false,
              "tag": "Untagged",
              "id": -64918,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (102)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -62448,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(25.03049, 11.5413, -1.326546),
                "rotation": new Quaternion(0, -0.01437224, 0, -0.9998967),
                "scale": new Vector3(0.8856212, 0.8856212, 0.8856212)
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
              "parent": -62448,
              "enabled": false,
              "tag": "Untagged",
              "id": -62504,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (246)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -65066,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(26.07849, 11.5413, 7.233254),
                "rotation": new Quaternion(0, 0.4875008, 0, -0.8731226),
                "scale": new Vector3(0.3454986, 0.3454986, 0.3454986)
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
              "parent": -65066,
              "enabled": false,
              "tag": "Untagged",
              "id": -65064,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (70)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -61488,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(25.92249, 4.633301, -3.043846),
                "rotation": new Quaternion(0, -0.01437224, 0, -0.9998967),
                "scale": new Vector3(1.116197, 1.116197, 1.116197)
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
              "parent": -61488,
              "enabled": false,
              "tag": "Untagged",
              "id": -61544,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (214)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -64922,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(27.24349, 4.633301, 7.744454),
                "rotation": new Quaternion(0, 0.4875008, 0, -0.8731226),
                "scale": new Vector3(0.4354506, 0.4354506, 0.4354506)
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
              "parent": -64922,
              "enabled": false,
              "tag": "Untagged",
              "id": -65068,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (8)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -55466,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(26.19549, -3.9637, 1.944155),
                "rotation": new Quaternion(0, 0.6968701, 0, -0.7171975),
                "scale": new Vector3(0.92045, 0.92045, 0.92045)
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
              "parent": -55466,
              "enabled": false,
              "tag": "Untagged",
              "id": -55464,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (279)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -65228,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(23.2433, -3.963699, 10.15851),
                "rotation": new Quaternion(0, 0.9621056, 0, -0.2726772),
                "scale": new Vector3(0.359086, 0.3590859, 0.359086)
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
              "parent": -65228,
              "enabled": false,
              "tag": "Untagged",
              "id": -65230,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (50)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -60522,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(26.19549, -28.4974, 1.944155),
                "rotation": new Quaternion(0, 0.6968701, 0, -0.7171975),
                "scale": new Vector3(0.92045, 0.92045, 0.92045)
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
              "parent": -60522,
              "enabled": false,
              "tag": "Untagged",
              "id": -60524,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (272)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -65186,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(23.2433, -28.4974, 10.15851),
                "rotation": new Quaternion(0, 0.9621056, 0, -0.2726772),
                "scale": new Vector3(0.359086, 0.3590859, 0.359086)
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
              "parent": -65186,
              "enabled": false,
              "tag": "Untagged",
              "id": -65184,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (148)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -63476,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(26.19549, -14.5437, 1.944155),
                "rotation": new Quaternion(0, 0.6968701, 0, -0.7171975),
                "scale": new Vector3(0.92045, 0.92045, 0.92045)
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
              "parent": -63476,
              "enabled": false,
              "tag": "Untagged",
              "id": -63474,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (177)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -64814,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(23.2433, -14.5437, 10.15851),
                "rotation": new Quaternion(0, 0.9621056, 0, -0.2726772),
                "scale": new Vector3(0.359086, 0.3590859, 0.359086)
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
              "parent": -64814,
              "enabled": false,
              "tag": "Untagged",
              "id": -64924,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (116)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -62508,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(23.39049, 11.8683, 2.913754),
                "rotation": new Quaternion(0, 0.6968701, 0, -0.7171975),
                "scale": new Vector3(0.5624778, 0.5624778, 0.5624778)
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
              "parent": -62508,
              "enabled": false,
              "tag": "Untagged",
              "id": -62506,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (215)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -64926,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(21.58649, 11.8683, 7.933555),
                "rotation": new Quaternion(0, 0.9621056, 0, -0.2726772),
                "scale": new Vector3(0.2194338, 0.2194338, 0.2194338)
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
              "parent": -64926,
              "enabled": false,
              "tag": "Untagged",
              "id": -65070,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (84)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -61548,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(23.85549, 5.0443, 2.300454),
                "rotation": new Quaternion(0, 0.6968701, 0, -0.7171975),
                "scale": new Vector3(0.7089214, 0.7089214, 0.7089214)
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
              "parent": -61548,
              "enabled": false,
              "tag": "Untagged",
              "id": -61546,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (216)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -64928,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(21.58149, 5.0443, 8.627054),
                "rotation": new Quaternion(0, 0.9621056, 0, -0.2726772),
                "scale": new Vector3(0.2765644, 0.2765644, 0.2765644)
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
              "parent": -64928,
              "enabled": false,
              "tag": "Untagged",
              "id": -65072,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (23)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -57568,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(25.81649, -8.9536, -8.056846),
                "rotation": new Quaternion(0, -0.01437224, 0, -0.9998967),
                "scale": new Vector3(1.449249, 1.449248, 1.449249)
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
              "parent": -57568,
              "enabled": false,
              "tag": "Untagged",
              "id": -57570,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (273)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -65188,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(31.71491, -8.9536, 4.829774),
                "rotation": new Quaternion(0, 0.4875008, 0, -0.8731226),
                "scale": new Vector3(0.5653808, 0.5653808, 0.5653808)
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
              "parent": -65188,
              "enabled": false,
              "tag": "Untagged",
              "id": -65246,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (36)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -60466,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(18.03229, -42.9717, 0.9719546),
                "rotation": new Quaternion(0, -0.01437224, 0, -0.9998967),
                "scale": new Vector3(0.3164899, 0.3164898, 0.3164899)
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
              "parent": -60466,
              "enabled": false,
              "tag": "Untagged",
              "id": -60534,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (421)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -78528,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(17.28259, 16.4273, 1.841554),
                "rotation": new Quaternion(0, -0.01437224, 0, -0.9998967),
                "scale": new Vector3(0.2073895, 0.2073895, 0.2073895)
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
              "parent": -78528,
              "enabled": false,
              "tag": "Untagged",
              "id": -78526,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (389)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -77194,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(19.81749, -39.6767, -1.098546),
                "rotation": new Quaternion(0, -0.01437224, 0, -0.9998967),
                "scale": new Vector3(0.5762533, 0.5762533, 0.5762533)
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
              "parent": -77194,
              "enabled": false,
              "tag": "Untagged",
              "id": -77192,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (357)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -75840,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(22.73549, -34.1187, -4.483246),
                "rotation": new Quaternion(0, -0.01437224, 0, -0.9998967),
                "scale": new Vector3(1.000909, 1.000909, 1.000909)
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
              "parent": -75840,
              "enabled": false,
              "tag": "Untagged",
              "id": -75838,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (217)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -64930,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(19.32029, -42.9717, 3.786155),
                "rotation": new Quaternion(0, 0.4875008, 0, -0.8731226),
                "scale": new Vector3(0.123469, 0.123469, 0.123469)
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
              "parent": -64930,
              "enabled": false,
              "tag": "Untagged",
              "id": -65232,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (410)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -78478,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(18.12659, 16.4273, 3.685635),
                "rotation": new Quaternion(0, 0.4875008, 0, -0.8731226),
                "scale": new Vector3(0.08090678, 0.08090678, 0.08090678)
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
              "parent": -78478,
              "enabled": false,
              "tag": "Untagged",
              "id": -78486,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (378)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -77144,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(22.16249, -39.6767, 4.025485),
                "rotation": new Quaternion(0, 0.4875008, 0, -0.8731226),
                "scale": new Vector3(0.2248079, 0.2248079, 0.2248079)
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
              "parent": -77144,
              "enabled": false,
              "tag": "Untagged",
              "id": -77152,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (346)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -75790,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(26.80949, -34.1187, 4.41674),
                "rotation": new Quaternion(0, 0.4875008, 0, -0.8731226),
                "scale": new Vector3(0.3904746, 0.3904746, 0.3904746)
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
              "parent": -75790,
              "enabled": false,
              "tag": "Untagged",
              "id": -75798,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (149)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -63478,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(25.81649, -19.5336, -8.056846),
                "rotation": new Quaternion(0, -0.01437224, 0, -0.9998967),
                "scale": new Vector3(1.449249, 1.449248, 1.449249)
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
              "parent": -63478,
              "enabled": false,
              "tag": "Untagged",
              "id": -63488,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (178)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -64816,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(31.71491, -19.5336, 4.829774),
                "rotation": new Quaternion(0, 0.4875008, 0, -0.8731226),
                "scale": new Vector3(0.5653808, 0.5653808, 0.5653808)
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
              "parent": -64816,
              "enabled": false,
              "tag": "Untagged",
              "id": -64970,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (117)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -62510,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(23.56349, 6.600301, -5.402246),
                "rotation": new Quaternion(0, -0.01437224, 0, -0.9998967),
                "scale": new Vector3(1.116197, 1.116197, 1.116197)
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
              "parent": -62510,
              "enabled": false,
              "tag": "Untagged",
              "id": -62520,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (218)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -64932,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(28.10649, 6.600301, 4.522952),
                "rotation": new Quaternion(0, 0.4875008, 0, -0.8731226),
                "scale": new Vector3(0.4354506, 0.4354506, 0.4354506)
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
              "parent": -64932,
              "enabled": false,
              "tag": "Untagged",
              "id": -65102,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (85)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -61550,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(25.81649, -0.3936005, -8.056846),
                "rotation": new Quaternion(0, -0.01437224, 0, -0.9998967),
                "scale": new Vector3(1.449249, 1.449248, 1.449249)
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
              "parent": -61550,
              "enabled": false,
              "tag": "Untagged",
              "id": -61560,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (219)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -64934,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(31.71491, -0.3936005, 4.829774),
                "rotation": new Quaternion(0, 0.4875008, 0, -0.8731226),
                "scale": new Vector3(0.5653808, 0.5653808, 0.5653808)
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
              "parent": -64934,
              "enabled": false,
              "tag": "Untagged",
              "id": -65354,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (7)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -55432,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(24.94549, -3.7137, -0.8058457),
                "rotation": new Quaternion(0, 0.6968701, 0, -0.7171975),
                "scale": new Vector3(0.92045, 0.92045, 0.92045)
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
              "parent": -55432,
              "enabled": false,
              "tag": "Untagged",
              "id": -55430,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (280)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -65234,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(24.99986, -3.713699, 7.700976),
                "rotation": new Quaternion(0, 0.9621056, 0, -0.2726772),
                "scale": new Vector3(0.359086, 0.3590859, 0.359086)
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
              "parent": -65234,
              "enabled": false,
              "tag": "Untagged",
              "id": -65238,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (51)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -60526,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(24.94549, -28.2474, -0.8058457),
                "rotation": new Quaternion(0, 0.6968701, 0, -0.7171975),
                "scale": new Vector3(0.92045, 0.92045, 0.92045)
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
              "parent": -60526,
              "enabled": false,
              "tag": "Untagged",
              "id": -60528,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (220)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -64936,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(24.99986, -28.2474, 7.700976),
                "rotation": new Quaternion(0, 0.9621056, 0, -0.2726772),
                "scale": new Vector3(0.359086, 0.3590859, 0.359086)
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
              "parent": -64936,
              "enabled": false,
              "tag": "Untagged",
              "id": -65240,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (135)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -63418,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(24.94549, -14.2937, -0.8058457),
                "rotation": new Quaternion(0, 0.6968701, 0, -0.7171975),
                "scale": new Vector3(0.92045, 0.92045, 0.92045)
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
              "parent": -63418,
              "enabled": false,
              "tag": "Untagged",
              "id": -63480,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (221)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -64940,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(24.99986, -14.2937, 7.700976),
                "rotation": new Quaternion(0, 0.9621056, 0, -0.2726772),
                "scale": new Vector3(0.359086, 0.3590859, 0.359086)
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
              "parent": -64940,
              "enabled": false,
              "tag": "Untagged",
              "id": -64938,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (103)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -62450,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(22.62749, 12.0203, 1.233254),
                "rotation": new Quaternion(0, 0.6968701, 0, -0.7171975),
                "scale": new Vector3(0.5624778, 0.5624778, 0.5624778)
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
              "parent": -62450,
              "enabled": false,
              "tag": "Untagged",
              "id": -62512,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (247)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -65076,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(22.66049, 12.0203, 6.431755),
                "rotation": new Quaternion(0, 0.9621056, 0, -0.2726772),
                "scale": new Vector3(0.2194338, 0.2194338, 0.2194338)
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
              "parent": -65076,
              "enabled": false,
              "tag": "Untagged",
              "id": -65074,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (71)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -61490,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(22.89249, 5.2373, 0.1824546),
                "rotation": new Quaternion(0, 0.6968701, 0, -0.7171975),
                "scale": new Vector3(0.7089214, 0.7089214, 0.7089214)
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
              "parent": -61490,
              "enabled": false,
              "tag": "Untagged",
              "id": -61552,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (222)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -64942,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(22.93449, 5.2373, 6.734354),
                "rotation": new Quaternion(0, 0.9621056, 0, -0.2726772),
                "scale": new Vector3(0.2765644, 0.2765644, 0.2765644)
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
              "parent": -64942,
              "enabled": false,
              "tag": "Untagged",
              "id": -65078,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (24)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -57572,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(21.36349, -8.559999, -9.726846),
                "rotation": new Quaternion(0, -0.01437224, 0, -0.9998967),
                "scale": new Vector3(1.449249, 1.449248, 1.449249)
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
              "parent": -57572,
              "enabled": false,
              "tag": "Untagged",
              "id": -57574,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (282)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -65244,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(30.93466, -8.559999, 0.1383648),
                "rotation": new Quaternion(0, 0.4875008, 0, -0.8731226),
                "scale": new Vector3(0.5653808, 0.5653808, 0.5653808)
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
              "parent": -65244,
              "enabled": false,
              "tag": "Untagged",
              "id": -65242,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (52)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -60532,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(17.05999, -42.8857, 0.6071544),
                "rotation": new Quaternion(0, -0.01437224, 0, -0.9998967),
                "scale": new Vector3(0.3164899, 0.3164898, 0.3164899)
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
              "parent": -60532,
              "enabled": false,
              "tag": "Untagged",
              "id": -60530,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (422)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -78530,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(16.64539, 16.4843, 1.602454),
                "rotation": new Quaternion(0, -0.01437224, 0, -0.9998967),
                "scale": new Vector3(0.2073895, 0.2073895, 0.2073895)
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
              "parent": -78530,
              "enabled": false,
              "tag": "Untagged",
              "id": -78532,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (390)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -77196,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(18.04709, -39.5197, -1.762745),
                "rotation": new Quaternion(0, -0.01437224, 0, -0.9998967),
                "scale": new Vector3(0.5762533, 0.5762533, 0.5762533)
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
              "parent": -77196,
              "enabled": false,
              "tag": "Untagged",
              "id": -77198,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (358)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -75842,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(19.66049, -33.8467, -5.636846),
                "rotation": new Quaternion(0, -0.01437224, 0, -0.9998967),
                "scale": new Vector3(1.000909, 1.000909, 1.000909)
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
              "parent": -75842,
              "enabled": false,
              "tag": "Untagged",
              "id": -75844,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (281)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -65236,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(19.14999, -42.8857, 2.761654),
                "rotation": new Quaternion(0, 0.4875008, 0, -0.8731226),
                "scale": new Vector3(0.123469, 0.123469, 0.123469)
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
              "parent": -65236,
              "enabled": false,
              "tag": "Untagged",
              "id": -65248,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (411)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -78482,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(18.01499, 16.4843, 3.014255),
                "rotation": new Quaternion(0, 0.4875008, 0, -0.8731226),
                "scale": new Vector3(0.08090678, 0.08090678, 0.08090678)
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
              "parent": -78482,
              "enabled": false,
              "tag": "Untagged",
              "id": -78480,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (379)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -77148,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(21.85249, -39.5197, 2.160054),
                "rotation": new Quaternion(0, 0.4875008, 0, -0.8731226),
                "scale": new Vector3(0.2248079, 0.2248079, 0.2248079)
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
              "parent": -77148,
              "enabled": false,
              "tag": "Untagged",
              "id": -77146,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (347)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -75794,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(26.27049, -33.8467, 1.176655),
                "rotation": new Quaternion(0, 0.4875008, 0, -0.8731226),
                "scale": new Vector3(0.3904746, 0.3904746, 0.3904746)
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
              "parent": -75794,
              "enabled": false,
              "tag": "Untagged",
              "id": -75792,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (136)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -63420,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(21.36349, -19.14, -9.726846),
                "rotation": new Quaternion(0, -0.01437224, 0, -0.9998967),
                "scale": new Vector3(1.449249, 1.449248, 1.449249)
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
              "parent": -63420,
              "enabled": false,
              "tag": "Untagged",
              "id": -63482,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (223)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -64944,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(30.93466, -19.14, 0.1383648),
                "rotation": new Quaternion(0, 0.4875008, 0, -0.8731226),
                "scale": new Vector3(0.5653808, 0.5653808, 0.5653808)
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
              "parent": -64944,
              "enabled": false,
              "tag": "Untagged",
              "id": -64974,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (104)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -62452,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(20.13449, 6.9033, -6.688846),
                "rotation": new Quaternion(0, -0.01437224, 0, -0.9998967),
                "scale": new Vector3(1.116197, 1.116197, 1.116197)
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
              "parent": -62452,
              "enabled": false,
              "tag": "Untagged",
              "id": -62514,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (248)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -65082,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(27.50549, 6.9033, 0.9096544),
                "rotation": new Quaternion(0, 0.4875008, 0, -0.8731226),
                "scale": new Vector3(0.4354506, 0.4354506, 0.4354506)
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
              "parent": -65082,
              "enabled": false,
              "tag": "Untagged",
              "id": -65080,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (72)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -61492,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(21.36349, 0, -9.726846),
                "rotation": new Quaternion(0, -0.01437224, 0, -0.9998967),
                "scale": new Vector3(1.449249, 1.449248, 1.449249)
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
              "parent": -61492,
              "enabled": false,
              "tag": "Untagged",
              "id": -61554,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (224)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -64946,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(30.93466, 0, 0.1383648),
                "rotation": new Quaternion(0, 0.4875008, 0, -0.8731226),
                "scale": new Vector3(0.5653808, 0.5653808, 0.5653808)
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
              "parent": -64946,
              "enabled": false,
              "tag": "Untagged",
              "id": -65084,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (6)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -55400,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(22.94549, -3.7137, -3.055846),
                "rotation": new Quaternion(0, 0.6968701, 0, -0.7171975),
                "scale": new Vector3(0.92045, 0.92045, 0.92045)
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
              "parent": -55400,
              "enabled": false,
              "tag": "Untagged",
              "id": -55398,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (283)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -65250,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(25.94842, -3.713699, 4.843925),
                "rotation": new Quaternion(0, 0.9621056, 0, -0.2726772),
                "scale": new Vector3(0.359086, 0.3590859, 0.359086)
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
              "parent": -65250,
              "enabled": false,
              "tag": "Untagged",
              "id": -65252,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (53)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -60536,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(22.94549, -28.2474, -3.055846),
                "rotation": new Quaternion(0, 0.6968701, 0, -0.7171975),
                "scale": new Vector3(0.92045, 0.92045, 0.92045)
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
              "parent": -60536,
              "enabled": false,
              "tag": "Untagged",
              "id": -60538,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (284)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -65256,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(25.94842, -28.2474, 4.843925),
                "rotation": new Quaternion(0, 0.9621056, 0, -0.2726772),
                "scale": new Vector3(0.359086, 0.3590859, 0.359086)
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
              "parent": -65256,
              "enabled": false,
              "tag": "Untagged",
              "id": -65254,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (150)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -63486,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(22.94549, -14.2937, -3.055846),
                "rotation": new Quaternion(0, 0.6968701, 0, -0.7171975),
                "scale": new Vector3(0.92045, 0.92045, 0.92045)
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
              "parent": -63486,
              "enabled": false,
              "tag": "Untagged",
              "id": -63484,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (234)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -64972,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(25.94842, -14.2937, 4.843925),
                "rotation": new Quaternion(0, 0.9621056, 0, -0.2726772),
                "scale": new Vector3(0.359086, 0.3590859, 0.359086)
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
              "parent": -64972,
              "enabled": false,
              "tag": "Untagged",
              "id": -64976,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (118)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -62518,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(21.40449, 12.0203, -0.1416454),
                "rotation": new Quaternion(0, 0.6968701, 0, -0.7171975),
                "scale": new Vector3(0.5624778, 0.5624778, 0.5624778)
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
              "parent": -62518,
              "enabled": false,
              "tag": "Untagged",
              "id": -62516,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (253)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -65104,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(23.23949, 12.0203, 4.685814),
                "rotation": new Quaternion(0, 0.9621056, 0, -0.2726772),
                "scale": new Vector3(0.2194338, 0.2194338, 0.2194338)
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
              "parent": -65104,
              "enabled": false,
              "tag": "Untagged",
              "id": -65086,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (86)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -61558,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(21.35249, 5.2373, -1.550446),
                "rotation": new Quaternion(0, 0.6968701, 0, -0.7171975),
                "scale": new Vector3(0.7089214, 0.7089214, 0.7089214)
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
              "parent": -61558,
              "enabled": false,
              "tag": "Untagged",
              "id": -61556,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (225)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -64948,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(23.66549, 5.2373, 4.533849),
                "rotation": new Quaternion(0, 0.9621056, 0, -0.2726772),
                "scale": new Vector3(0.2765644, 0.2765644, 0.2765644)
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
              "parent": -64948,
              "enabled": false,
              "tag": "Untagged",
              "id": -65090,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (25)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -57576,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(16.63149, -8.559999, -10.00485),
                "rotation": new Quaternion(0, -0.01437224, 0, -0.9998967),
                "scale": new Vector3(1.449249, 1.449248, 1.449249)
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
              "parent": -57576,
              "enabled": false,
              "tag": "Untagged",
              "id": -57578,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (285)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -65260,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(28.80941, -8.559999, -4.098664),
                "rotation": new Quaternion(0, 0.4875008, 0, -0.8731226),
                "scale": new Vector3(0.5653808, 0.5653808, 0.5653808)
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
              "parent": -65260,
              "enabled": false,
              "tag": "Untagged",
              "id": -65258,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (54)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -60542,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(16.02649, -42.8857, 0.5464544),
                "rotation": new Quaternion(0, -0.01437224, 0, -0.9998967),
                "scale": new Vector3(0.3164899, 0.3164898, 0.3164899)
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
              "parent": -60542,
              "enabled": false,
              "tag": "Untagged",
              "id": -60540,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (412)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -78488,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(15.96819, 16.4843, 1.562754),
                "rotation": new Quaternion(0, -0.01437224, 0, -0.9998967),
                "scale": new Vector3(0.2073895, 0.2073895, 0.2073895)
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
              "parent": -78488,
              "enabled": false,
              "tag": "Untagged",
              "id": -78534,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (380)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -77154,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(16.16529, -39.5197, -1.873246),
                "rotation": new Quaternion(0, -0.01437224, 0, -0.9998967),
                "scale": new Vector3(0.5762533, 0.5762533, 0.5762533)
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
              "parent": -77154,
              "enabled": false,
              "tag": "Untagged",
              "id": -77200,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (348)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -75800,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(16.39199, -33.8467, -5.828846),
                "rotation": new Quaternion(0, -0.01437224, 0, -0.9998967),
                "scale": new Vector3(1.000909, 1.000909, 1.000909)
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
              "parent": -75800,
              "enabled": false,
              "tag": "Untagged",
              "id": -75846,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (226)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -64950,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(18.68589, -42.8857, 1.836354),
                "rotation": new Quaternion(0, 0.4875008, 0, -0.8731226),
                "scale": new Vector3(0.123469, 0.123469, 0.123469)
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
              "parent": -64950,
              "enabled": false,
              "tag": "Untagged",
              "id": -65262,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (413)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -78492,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(17.71089, 16.4843, 2.407954),
                "rotation": new Quaternion(0, 0.4875008, 0, -0.8731226),
                "scale": new Vector3(0.08090678, 0.08090678, 0.08090678)
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
              "parent": -78492,
              "enabled": false,
              "tag": "Untagged",
              "id": -78490,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (381)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -77158,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(21.00749, -39.5197, 0.4753544),
                "rotation": new Quaternion(0, 0.4875008, 0, -0.8731226),
                "scale": new Vector3(0.2248079, 0.2248079, 0.2248079)
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
              "parent": -77158,
              "enabled": false,
              "tag": "Untagged",
              "id": -77156,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (349)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -75804,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(24.80249, -33.8467, -1.749546),
                "rotation": new Quaternion(0, 0.4875008, 0, -0.8731226),
                "scale": new Vector3(0.3904746, 0.3904746, 0.3904746)
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
              "parent": -75804,
              "enabled": false,
              "tag": "Untagged",
              "id": -75802,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (137)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -63422,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(16.63149, -19.14, -10.00485),
                "rotation": new Quaternion(0, -0.01437224, 0, -0.9998967),
                "scale": new Vector3(1.449249, 1.449248, 1.449249)
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
              "parent": -63422,
              "enabled": false,
              "tag": "Untagged",
              "id": -63490,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (227)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -64952,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(28.80941, -19.14, -4.098664),
                "rotation": new Quaternion(0, 0.4875008, 0, -0.8731226),
                "scale": new Vector3(0.5653808, 0.5653808, 0.5653808)
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
              "parent": -64952,
              "enabled": false,
              "tag": "Untagged",
              "id": -64978,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (105)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -62454,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(16.48949, 6.9033, -6.902845),
                "rotation": new Quaternion(0, -0.01437224, 0, -0.9998967),
                "scale": new Vector3(1.116197, 1.116197, 1.116197)
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
              "parent": -62454,
              "enabled": false,
              "tag": "Untagged",
              "id": -62522,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (249)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -65088,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(25.86849, 6.9033, -2.353645),
                "rotation": new Quaternion(0, 0.4875008, 0, -0.8731226),
                "scale": new Vector3(0.4354506, 0.4354506, 0.4354506)
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
              "parent": -65088,
              "enabled": false,
              "tag": "Untagged",
              "id": -65106,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (73)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -61494,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(16.63149, 0, -10.00485),
                "rotation": new Quaternion(0, -0.01437224, 0, -0.9998967),
                "scale": new Vector3(1.449249, 1.449248, 1.449249)
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
              "parent": -61494,
              "enabled": false,
              "tag": "Untagged",
              "id": -61562,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (228)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -64954,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(28.80941, 0, -4.098664),
                "rotation": new Quaternion(0, 0.4875008, 0, -0.8731226),
                "scale": new Vector3(0.5653808, 0.5653808, 0.5653808)
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
              "parent": -64954,
              "enabled": false,
              "tag": "Untagged",
              "id": -65356,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (5)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -55366,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(21.19549, -3.7137, -4.055845),
                "rotation": new Quaternion(0, 0.6968701, 0, -0.7171975),
                "scale": new Vector3(0.92045, 0.92045, 0.92045)
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
              "parent": -55366,
              "enabled": false,
              "tag": "Untagged",
              "id": -55364,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (286)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -65264,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(25.93944, -3.713699, 2.828381),
                "rotation": new Quaternion(0, 0.9621056, 0, -0.2726772),
                "scale": new Vector3(0.359086, 0.3590859, 0.359086)
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
              "parent": -65264,
              "enabled": false,
              "tag": "Untagged",
              "id": -65266,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (55)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -60544,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(21.19549, -28.2474, -4.055845),
                "rotation": new Quaternion(0, 0.6968701, 0, -0.7171975),
                "scale": new Vector3(0.92045, 0.92045, 0.92045)
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
              "parent": -60544,
              "enabled": false,
              "tag": "Untagged",
              "id": -60546,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (287)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -65270,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(25.93944, -28.2474, 2.828381),
                "rotation": new Quaternion(0, 0.9621056, 0, -0.2726772),
                "scale": new Vector3(0.359086, 0.3590859, 0.359086)
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
              "parent": -65270,
              "enabled": false,
              "tag": "Untagged",
              "id": -65268,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (138)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -63424,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(21.19549, -14.2937, -4.055845),
                "rotation": new Quaternion(0, 0.6968701, 0, -0.7171975),
                "scale": new Vector3(0.92045, 0.92045, 0.92045)
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
              "parent": -63424,
              "enabled": false,
              "tag": "Untagged",
              "id": -63498,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (229)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -64958,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(25.93944, -14.2937, 2.828381),
                "rotation": new Quaternion(0, 0.9621056, 0, -0.2726772),
                "scale": new Vector3(0.359086, 0.3590859, 0.359086)
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
              "parent": -64958,
              "enabled": false,
              "tag": "Untagged",
              "id": -64956,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (106)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -62456,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(20.33549, 12.0203, -0.7527456),
                "rotation": new Quaternion(0, 0.6968701, 0, -0.7171975),
                "scale": new Vector3(0.5624778, 0.5624778, 0.5624778)
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
              "parent": -62456,
              "enabled": false,
              "tag": "Untagged",
              "id": -62530,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (250)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -65094,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(23.23449, 12.0203, 3.454154),
                "rotation": new Quaternion(0, 0.9621056, 0, -0.2726772),
                "scale": new Vector3(0.2194338, 0.2194338, 0.2194338)
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
              "parent": -65094,
              "enabled": false,
              "tag": "Untagged",
              "id": -65092,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (74)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -61496,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(20.00449, 5.2373, -2.320645),
                "rotation": new Quaternion(0, 0.6968701, 0, -0.7171975),
                "scale": new Vector3(0.7089214, 0.7089214, 0.7089214)
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
              "parent": -61496,
              "enabled": false,
              "tag": "Untagged",
              "id": -61570,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (230)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -64960,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(23.65849, 5.2373, 2.981454),
                "rotation": new Quaternion(0, 0.9621056, 0, -0.2726772),
                "scale": new Vector3(0.2765644, 0.2765644, 0.2765644)
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
              "parent": -64960,
              "enabled": false,
              "tag": "Untagged",
              "id": -65358,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (26)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -57580,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(13.56979, -8.559999, -9.169846),
                "rotation": new Quaternion(0, -0.01437224, 0, -0.9998967),
                "scale": new Vector3(1.449249, 1.449248, 1.449249)
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
              "parent": -57580,
              "enabled": false,
              "tag": "Untagged",
              "id": -57582,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (288)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -65274,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(26.55543, -8.559999, -6.33267),
                "rotation": new Quaternion(0, 0.4875008, 0, -0.8731226),
                "scale": new Vector3(0.5653808, 0.5653808, 0.5653808)
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
              "parent": -65274,
              "enabled": false,
              "tag": "Untagged",
              "id": -65272,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (37)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -60468,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(15.35789, -42.8857, 0.7288544),
                "rotation": new Quaternion(0, -0.01437224, 0, -0.9998967),
                "scale": new Vector3(0.3164899, 0.3164898, 0.3164899)
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
              "parent": -60468,
              "enabled": false,
              "tag": "Untagged",
              "id": -60556,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (423)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -78536,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(15.53009, 16.4843, 1.682255),
                "rotation": new Quaternion(0, -0.01437224, 0, -0.9998967),
                "scale": new Vector3(0.2073895, 0.2073895, 0.2073895)
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
              "parent": -78536,
              "enabled": false,
              "tag": "Untagged",
              "id": -78554,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (391)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -77202,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(14.94789, -39.5197, -1.541145),
                "rotation": new Quaternion(0, -0.01437224, 0, -0.9998967),
                "scale": new Vector3(0.5762533, 0.5762533, 0.5762533)
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
              "parent": -77202,
              "enabled": false,
              "tag": "Untagged",
              "id": -77220,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (359)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -75848,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(14.27749, -33.8467, -5.251945),
                "rotation": new Quaternion(0, -0.01437224, 0, -0.9998967),
                "scale": new Vector3(1.000909, 1.000909, 1.000909)
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
              "parent": -75848,
              "enabled": false,
              "tag": "Untagged",
              "id": -75866,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (289)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -65278,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(18.19379, -42.8857, 1.348454),
                "rotation": new Quaternion(0, 0.4875008, 0, -0.8731226),
                "scale": new Vector3(0.123469, 0.123469, 0.123469)
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
              "parent": -65278,
              "enabled": false,
              "tag": "Untagged",
              "id": -65276,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (398)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -78440,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(17.38839, 16.4843, 2.088254),
                "rotation": new Quaternion(0, 0.4875008, 0, -0.8731226),
                "scale": new Vector3(0.08090678, 0.08090678, 0.08090678)
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
              "parent": -78440,
              "enabled": false,
              "tag": "Untagged",
              "id": -78494,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (366)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -77106,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(20.11149, -39.5197, -0.4129457),
                "rotation": new Quaternion(0, 0.4875008, 0, -0.8731226),
                "scale": new Vector3(0.2248079, 0.2248079, 0.2248079)
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
              "parent": -77106,
              "enabled": false,
              "tag": "Untagged",
              "id": -77160,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (334)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -75752,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(23.24549, -33.8467, -3.292446),
                "rotation": new Quaternion(0, 0.4875008, 0, -0.8731226),
                "scale": new Vector3(0.3904746, 0.3904746, 0.3904746)
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
              "parent": -75752,
              "enabled": false,
              "tag": "Untagged",
              "id": -75806,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (151)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -63492,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(13.56979, -19.14, -9.169846),
                "rotation": new Quaternion(0, -0.01437224, 0, -0.9998967),
                "scale": new Vector3(1.449249, 1.449248, 1.449249)
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
              "parent": -63492,
              "enabled": false,
              "tag": "Untagged",
              "id": -63504,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (231)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -64964,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(26.55543, -19.14, -6.33267),
                "rotation": new Quaternion(0, 0.4875008, 0, -0.8731226),
                "scale": new Vector3(0.5653808, 0.5653808, 0.5653808)
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
              "parent": -64964,
              "enabled": false,
              "tag": "Untagged",
              "id": -64962,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (119)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -62524,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(14.13139, 6.9033, -6.259846),
                "rotation": new Quaternion(0, -0.01437224, 0, -0.9998967),
                "scale": new Vector3(1.116197, 1.116197, 1.116197)
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
              "parent": -62524,
              "enabled": false,
              "tag": "Untagged",
              "id": -62536,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (251)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -65098,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(24.13249, 6.9033, -4.074245),
                "rotation": new Quaternion(0, 0.4875008, 0, -0.8731226),
                "scale": new Vector3(0.4354506, 0.4354506, 0.4354506)
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
              "parent": -65098,
              "enabled": false,
              "tag": "Untagged",
              "id": -65096,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (87)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -61564,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(13.56979, 0, -9.169846),
                "rotation": new Quaternion(0, -0.01437224, 0, -0.9998967),
                "scale": new Vector3(1.449249, 1.449248, 1.449249)
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
              "parent": -61564,
              "enabled": false,
              "tag": "Untagged",
              "id": -61576,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (232)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -64966,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(26.55543, 0, -6.33267),
                "rotation": new Quaternion(0, 0.4875008, 0, -0.8731226),
                "scale": new Vector3(0.5653808, 0.5653808, 0.5653808)
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
              "parent": -64966,
              "enabled": false,
              "tag": "Untagged",
              "id": -65368,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (4)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -55332,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(19.44549, -3.7137, -4.555845),
                "rotation": new Quaternion(0, 0.6968701, 0, -0.7171975),
                "scale": new Vector3(0.92045, 0.92045, 0.92045)
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
              "parent": -55332,
              "enabled": false,
              "tag": "Untagged",
              "id": -55330,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (290)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -65280,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(25.49745, -3.713699, 1.062838),
                "rotation": new Quaternion(0, 0.9621056, 0, -0.2726772),
                "scale": new Vector3(0.359086, 0.3590859, 0.359086)
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
              "parent": -65280,
              "enabled": false,
              "tag": "Untagged",
              "id": -65284,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (56)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -60548,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(19.44549, -28.2474, -4.555845),
                "rotation": new Quaternion(0, 0.6968701, 0, -0.7171975),
                "scale": new Vector3(0.92045, 0.92045, 0.92045)
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
              "parent": -60548,
              "enabled": false,
              "tag": "Untagged",
              "id": -60550,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (292)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -65288,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(25.49745, -28.2474, 1.062838),
                "rotation": new Quaternion(0, 0.9621056, 0, -0.2726772),
                "scale": new Vector3(0.359086, 0.3590859, 0.359086)
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
              "parent": -65288,
              "enabled": false,
              "tag": "Untagged",
              "id": -65286,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (152)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -63496,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(19.44549, -14.2937, -4.555845),
                "rotation": new Quaternion(0, 0.6968701, 0, -0.7171975),
                "scale": new Vector3(0.92045, 0.92045, 0.92045)
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
              "parent": -63496,
              "enabled": false,
              "tag": "Untagged",
              "id": -63494,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (233)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -64968,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(25.49745, -14.2937, 1.062838),
                "rotation": new Quaternion(0, 0.9621056, 0, -0.2726772),
                "scale": new Vector3(0.359086, 0.3590859, 0.359086)
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
              "parent": -64968,
              "enabled": false,
              "tag": "Untagged",
              "id": -64980,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (120)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -62528,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(19.26609, 12.0203, -1.058345),
                "rotation": new Quaternion(0, 0.6968701, 0, -0.7171975),
                "scale": new Vector3(0.5624778, 0.5624778, 0.5624778)
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
              "parent": -62528,
              "enabled": false,
              "tag": "Untagged",
              "id": -62526,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (252)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -65100,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(22.96449, 12.0203, 2.375254),
                "rotation": new Quaternion(0, 0.9621056, 0, -0.2726772),
                "scale": new Vector3(0.2194338, 0.2194338, 0.2194338)
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
              "parent": -65100,
              "enabled": false,
              "tag": "Untagged",
              "id": -65108,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (88)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -61568,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(18.65679, 5.2373, -2.705746),
                "rotation": new Quaternion(0, 0.6968701, 0, -0.7171975),
                "scale": new Vector3(0.7089214, 0.7089214, 0.7089214)
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
              "parent": -61568,
              "enabled": false,
              "tag": "Untagged",
              "id": -61566,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (308)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -65360,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(23.31749, 5.2373, 1.621655),
                "rotation": new Quaternion(0, 0.9621056, 0, -0.2726772),
                "scale": new Vector3(0.2765644, 0.2765644, 0.2765644)
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
              "parent": -65360,
              "enabled": false,
              "tag": "Untagged",
              "id": -65362,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (27)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -57584,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(11.06479, -8.559999, -7.777845),
                "rotation": new Quaternion(0, -0.01437224, 0, -0.9998967),
                "scale": new Vector3(1.449249, 1.449248, 1.449249)
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
              "parent": -57584,
              "enabled": false,
              "tag": "Untagged",
              "id": -57586,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (293)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -65292,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(24.09742, -8.559999, -7.806061),
                "rotation": new Quaternion(0, 0.4875008, 0, -0.8731226),
                "scale": new Vector3(0.5653808, 0.5653808, 0.5653808)
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
              "parent": -65292,
              "enabled": false,
              "tag": "Untagged",
              "id": -65290,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (57)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -60554,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(14.81079, -42.8857, 1.032855),
                "rotation": new Quaternion(0, -0.01437224, 0, -0.9998967),
                "scale": new Vector3(0.3164899, 0.3164898, 0.3164899)
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
              "parent": -60554,
              "enabled": false,
              "tag": "Untagged",
              "id": -60552,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (414)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -78496,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(15.17159, 16.4843, 1.881454),
                "rotation": new Quaternion(0, -0.01437224, 0, -0.9998967),
                "scale": new Vector3(0.2073895, 0.2073895, 0.2073895)
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
              "parent": -78496,
              "enabled": false,
              "tag": "Untagged",
              "id": -78538,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (382)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -77162,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(13.95189, -39.5197, -0.9875455),
                "rotation": new Quaternion(0, -0.01437224, 0, -0.9998967),
                "scale": new Vector3(0.5762533, 0.5762533, 0.5762533)
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
              "parent": -77162,
              "enabled": false,
              "tag": "Untagged",
              "id": -77204,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (350)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -75808,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(12.54749, -33.8467, -4.290545),
                "rotation": new Quaternion(0, -0.01437224, 0, -0.9998967),
                "scale": new Vector3(1.000909, 1.000909, 1.000909)
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
              "parent": -75808,
              "enabled": false,
              "tag": "Untagged",
              "id": -75850,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (291)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -65282,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(17.65699, -42.8857, 1.026654),
                "rotation": new Quaternion(0, 0.4875008, 0, -0.8731226),
                "scale": new Vector3(0.123469, 0.123469, 0.123469)
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
              "parent": -65282,
              "enabled": false,
              "tag": "Untagged",
              "id": -65294,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (415)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -78500,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(17.03659, 16.4843, 1.877354),
                "rotation": new Quaternion(0, 0.4875008, 0, -0.8731226),
                "scale": new Vector3(0.08090678, 0.08090678, 0.08090678)
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
              "parent": -78500,
              "enabled": false,
              "tag": "Untagged",
              "id": -78498,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (383)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -77166,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(19.13399, -39.5197, -0.9988456),
                "rotation": new Quaternion(0, 0.4875008, 0, -0.8731226),
                "scale": new Vector3(0.2248079, 0.2248079, 0.2248079)
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
              "parent": -77166,
              "enabled": false,
              "tag": "Untagged",
              "id": -77164,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (351)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -75812,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(21.54849, -33.8467, -4.310045),
                "rotation": new Quaternion(0, 0.4875008, 0, -0.8731226),
                "scale": new Vector3(0.3904746, 0.3904746, 0.3904746)
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
              "parent": -75812,
              "enabled": false,
              "tag": "Untagged",
              "id": -75810,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (154)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -63506,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(11.06479, -19.14, -7.777845),
                "rotation": new Quaternion(0, -0.01437224, 0, -0.9998967),
                "scale": new Vector3(1.449249, 1.449248, 1.449249)
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
              "parent": -63506,
              "enabled": false,
              "tag": "Untagged",
              "id": -63508,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (235)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -64984,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(24.09742, -19.14, -7.806061),
                "rotation": new Quaternion(0, 0.4875008, 0, -0.8731226),
                "scale": new Vector3(0.5653808, 0.5653808, 0.5653808)
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
              "parent": -64984,
              "enabled": false,
              "tag": "Untagged",
              "id": -64982,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (122)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -62538,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(12.20209, 6.9033, -5.187346),
                "rotation": new Quaternion(0, -0.01437224, 0, -0.9998967),
                "scale": new Vector3(1.116197, 1.116197, 1.116197)
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
              "parent": -62538,
              "enabled": false,
              "tag": "Untagged",
              "id": -62540,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (236)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -64986,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(22.23949, 6.9033, -5.209045),
                "rotation": new Quaternion(0, 0.4875008, 0, -0.8731226),
                "scale": new Vector3(0.4354506, 0.4354506, 0.4354506)
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
              "parent": -64986,
              "enabled": false,
              "tag": "Untagged",
              "id": -65110,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (90)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -61578,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(11.06479, 0, -7.777845),
                "rotation": new Quaternion(0, -0.01437224, 0, -0.9998967),
                "scale": new Vector3(1.449249, 1.449248, 1.449249)
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
              "parent": -61578,
              "enabled": false,
              "tag": "Untagged",
              "id": -61580,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (309)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -65366,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(24.09742, 0, -7.806061),
                "rotation": new Quaternion(0, 0.4875008, 0, -0.8731226),
                "scale": new Vector3(0.5653808, 0.5653808, 0.5653808)
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
              "parent": -65366,
              "enabled": false,
              "tag": "Untagged",
              "id": -65364,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (3)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -55298,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(16.94549, -3.7137, -4.805845),
                "rotation": new Quaternion(0, 0.6968701, 0, -0.7171975),
                "scale": new Vector3(0.92045, 0.92045, 0.92045)
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
              "parent": -55298,
              "enabled": false,
              "tag": "Untagged",
              "id": -55296,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (294)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -65296,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(24.46395, -3.713699, -1.227226),
                "rotation": new Quaternion(0, 0.9621056, 0, -0.2726772),
                "scale": new Vector3(0.359086, 0.3590859, 0.359086)
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
              "parent": -65296,
              "enabled": false,
              "tag": "Untagged",
              "id": -65298,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (58)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -60558,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(16.94549, -28.2474, -4.805845),
                "rotation": new Quaternion(0, 0.6968701, 0, -0.7171975),
                "scale": new Vector3(0.92045, 0.92045, 0.92045)
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
              "parent": -60558,
              "enabled": false,
              "tag": "Untagged",
              "id": -60560,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (295)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -65302,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(24.46395, -28.2474, -1.227226),
                "rotation": new Quaternion(0, 0.9621056, 0, -0.2726772),
                "scale": new Vector3(0.359086, 0.3590859, 0.359086)
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
              "parent": -65302,
              "enabled": false,
              "tag": "Untagged",
              "id": -65300,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (155)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -63512,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(16.94549, -14.2937, -4.805845),
                "rotation": new Quaternion(0, 0.6968701, 0, -0.7171975),
                "scale": new Vector3(0.92045, 0.92045, 0.92045)
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
              "parent": -63512,
              "enabled": false,
              "tag": "Untagged",
              "id": -63510,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (179)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -64818,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(24.46395, -14.2937, -1.227226),
                "rotation": new Quaternion(0, 0.9621056, 0, -0.2726772),
                "scale": new Vector3(0.359086, 0.3590859, 0.359086)
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
              "parent": -64818,
              "enabled": false,
              "tag": "Untagged",
              "id": -64988,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (123)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -62544,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(17.73839, 12.0203, -1.211046),
                "rotation": new Quaternion(0, 0.6968701, 0, -0.7171975),
                "scale": new Vector3(0.5624778, 0.5624778, 0.5624778)
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
              "parent": -62544,
              "enabled": false,
              "tag": "Untagged",
              "id": -62542,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (237)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -64990,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(22.33249, 12.0203, 0.9757545),
                "rotation": new Quaternion(0, 0.9621056, 0, -0.2726772),
                "scale": new Vector3(0.2194338, 0.2194338, 0.2194338)
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
              "parent": -64990,
              "enabled": false,
              "tag": "Untagged",
              "id": -65112,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (91)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -61584,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(16.73129, 5.2373, -2.898345),
                "rotation": new Quaternion(0, 0.6968701, 0, -0.7171975),
                "scale": new Vector3(0.7089214, 0.7089214, 0.7089214)
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
              "parent": -61584,
              "enabled": false,
              "tag": "Untagged",
              "id": -61582,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (238)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -64992,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(22.52149, 5.2373, -0.1420455),
                "rotation": new Quaternion(0, 0.9621056, 0, -0.2726772),
                "scale": new Vector3(0.2765644, 0.2765644, 0.2765644)
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
              "parent": -64992,
              "enabled": false,
              "tag": "Untagged",
              "id": -65370,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (28)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -57588,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(8.00299, -8.559999, -5.273246),
                "rotation": new Quaternion(0, -0.01437224, 0, -0.9998967),
                "scale": new Vector3(1.449249, 1.449248, 1.449249)
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
              "parent": -57588,
              "enabled": false,
              "tag": "Untagged",
              "id": -57590,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (296)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -65306,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(20.39747, -8.559999, -9.205353),
                "rotation": new Quaternion(0, 0.4875008, 0, -0.8731226),
                "scale": new Vector3(0.5653808, 0.5653808, 0.5653808)
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
              "parent": -65306,
              "enabled": false,
              "tag": "Untagged",
              "id": -65304,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (63)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -60580,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(14.14219, -42.8857, 1.579854),
                "rotation": new Quaternion(0, -0.01437224, 0, -0.9998967),
                "scale": new Vector3(0.3164899, 0.3164898, 0.3164899)
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
              "parent": -60580,
              "enabled": false,
              "tag": "Untagged",
              "id": -60578,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (416)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -78502,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(14.73349, 16.4843, 2.239855),
                "rotation": new Quaternion(0, -0.01437224, 0, -0.9998967),
                "scale": new Vector3(0.2073895, 0.2073895, 0.2073895)
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
              "parent": -78502,
              "enabled": false,
              "tag": "Untagged",
              "id": -78540,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (384)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -77168,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(12.73439, -39.5197, 0.008254528),
                "rotation": new Quaternion(0, -0.01437224, 0, -0.9998967),
                "scale": new Vector3(0.5762533, 0.5762533, 0.5762533)
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
              "parent": -77168,
              "enabled": false,
              "tag": "Untagged",
              "id": -77206,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (352)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -75814,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(10.43289, -33.8467, -2.560845),
                "rotation": new Quaternion(0, -0.01437224, 0, -0.9998967),
                "scale": new Vector3(1.000909, 1.000909, 1.000909)
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
              "parent": -75814,
              "enabled": false,
              "tag": "Untagged",
              "id": -75852,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (254)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -65114,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(16.84889, -42.8857, 0.7211545),
                "rotation": new Quaternion(0, 0.4875008, 0, -0.8731226),
                "scale": new Vector3(0.123469, 0.123469, 0.123469)
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
              "parent": -65114,
              "enabled": false,
              "tag": "Untagged",
              "id": -65308,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (417)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -78506,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(16.50709, 16.4843, 1.677155),
                "rotation": new Quaternion(0, 0.4875008, 0, -0.8731226),
                "scale": new Vector3(0.08090678, 0.08090678, 0.08090678)
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
              "parent": -78506,
              "enabled": false,
              "tag": "Untagged",
              "id": -78504,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (385)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -77172,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(17.66279, -39.5197, -1.555245),
                "rotation": new Quaternion(0, 0.4875008, 0, -0.8731226),
                "scale": new Vector3(0.2248079, 0.2248079, 0.2248079)
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
              "parent": -77172,
              "enabled": false,
              "tag": "Untagged",
              "id": -77170,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (353)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -75818,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(18.99299, -33.8467, -5.276445),
                "rotation": new Quaternion(0, 0.4875008, 0, -0.8731226),
                "scale": new Vector3(0.3904746, 0.3904746, 0.3904746)
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
              "parent": -75818,
              "enabled": false,
              "tag": "Untagged",
              "id": -75816,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (139)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -63426,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(8.00299, -19.14, -5.273246),
                "rotation": new Quaternion(0, -0.01437224, 0, -0.9998967),
                "scale": new Vector3(1.449249, 1.449248, 1.449249)
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
              "parent": -63426,
              "enabled": false,
              "tag": "Untagged",
              "id": -63500,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (239)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -64994,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(20.39747, -19.14, -9.205353),
                "rotation": new Quaternion(0, 0.4875008, 0, -0.8731226),
                "scale": new Vector3(0.5653808, 0.5653808, 0.5653808)
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
              "parent": -64994,
              "enabled": false,
              "tag": "Untagged",
              "id": -65328,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (107)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -62458,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(9.843889, 6.9033, -3.258346),
                "rotation": new Quaternion(0, -0.01437224, 0, -0.9998967),
                "scale": new Vector3(1.116197, 1.116197, 1.116197)
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
              "parent": -62458,
              "enabled": false,
              "tag": "Untagged",
              "id": -62532,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (255)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -65116,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(19.38999, 6.9033, -6.286845),
                "rotation": new Quaternion(0, 0.4875008, 0, -0.8731226),
                "scale": new Vector3(0.4354506, 0.4354506, 0.4354506)
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
              "parent": -65116,
              "enabled": false,
              "tag": "Untagged",
              "id": -65346,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (75)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -61498,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(8.00299, 0, -5.273246),
                "rotation": new Quaternion(0, -0.01437224, 0, -0.9998967),
                "scale": new Vector3(1.449249, 1.449248, 1.449249)
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
              "parent": -61498,
              "enabled": false,
              "tag": "Untagged",
              "id": -61572,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (256)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -65118,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(20.39747, 0, -9.205353),
                "rotation": new Quaternion(0, 0.4875008, 0, -0.8731226),
                "scale": new Vector3(0.5653808, 0.5653808, 0.5653808)
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
              "parent": -65118,
              "enabled": false,
              "tag": "Untagged",
              "id": -65372,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (2)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -55242,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(7.695489, -3.7137, 1.194155),
                "rotation": new Quaternion(0, 0.6968701, 0, -0.7171975),
                "scale": new Vector3(0.92045, 0.92045, 0.92045)
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
              "parent": -55242,
              "enabled": false,
              "tag": "Untagged",
              "id": -55240,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (297)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -65310,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(14.64279, -3.713699, -6.237946),
                "rotation": new Quaternion(0, 0.9621056, 0, -0.2726772),
                "scale": new Vector3(0.359086, 0.3590859, 0.359086)
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
              "parent": -65310,
              "enabled": false,
              "tag": "Untagged",
              "id": -65312,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (59)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -60562,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(7.695489, -28.2474, 1.194155),
                "rotation": new Quaternion(0, 0.6968701, 0, -0.7171975),
                "scale": new Vector3(0.92045, 0.92045, 0.92045)
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
              "parent": -60562,
              "enabled": false,
              "tag": "Untagged",
              "id": -60564,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (298)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -65316,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(14.64279, -28.2474, -6.237946),
                "rotation": new Quaternion(0, 0.9621056, 0, -0.2726772),
                "scale": new Vector3(0.359086, 0.3590859, 0.359086)
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
              "parent": -65316,
              "enabled": false,
              "tag": "Untagged",
              "id": -65314,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (153)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -63502,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(7.695489, -14.2937, 1.194155),
                "rotation": new Quaternion(0, 0.6968701, 0, -0.7171975),
                "scale": new Vector3(0.92045, 0.92045, 0.92045)
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
              "parent": -63502,
              "enabled": false,
              "tag": "Untagged",
              "id": -63528,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (299)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -65320,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(14.64279, -14.2937, -6.237946),
                "rotation": new Quaternion(0, 0.9621056, 0, -0.2726772),
                "scale": new Vector3(0.359086, 0.3590859, 0.359086)
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
              "parent": -65320,
              "enabled": false,
              "tag": "Untagged",
              "id": -65318,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (121)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -62534,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(12.08579, 12.0203, 2.455455),
                "rotation": new Quaternion(0, 0.6968701, 0, -0.7171975),
                "scale": new Vector3(0.5624778, 0.5624778, 0.5624778)
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
              "parent": -62534,
              "enabled": false,
              "tag": "Untagged",
              "id": -62560,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (302)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -65332,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(16.33119, 12.0203, -2.086246),
                "rotation": new Quaternion(0, 0.9621056, 0, -0.2726772),
                "scale": new Vector3(0.2194338, 0.2194338, 0.2194338)
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
              "parent": -65332,
              "enabled": false,
              "tag": "Untagged",
              "id": -65330,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (89)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -61574,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(9.607059, 5.2373, 1.722854),
                "rotation": new Quaternion(0, 0.6968701, 0, -0.7171975),
                "scale": new Vector3(0.7089214, 0.7089214, 0.7089214)
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
              "parent": -61574,
              "enabled": false,
              "tag": "Untagged",
              "id": -61600,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (304)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -65338,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(14.95779, 5.2373, -4.001346),
                "rotation": new Quaternion(0, 0.9621056, 0, -0.2726772),
                "scale": new Vector3(0.2765644, 0.2765644, 0.2765644)
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
              "parent": -65338,
              "enabled": false,
              "tag": "Untagged",
              "id": -65336,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (29)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -57592,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(4.384589, -8.559999, 11.70545),
                "rotation": new Quaternion(0, -0.01437224, 0, -0.9998967),
                "scale": new Vector3(1.449249, 1.449248, 1.449249)
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
              "parent": -57592,
              "enabled": false,
              "tag": "Untagged",
              "id": -57594,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (332)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -70652,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(4.384589, -8.559999, 11.70545),
                "rotation": new Quaternion(0, -0.01437224, 0, -0.9998967),
                "scale": new Vector3(1.449249, 1.449248, 1.449249)
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
              "parent": -70652,
              "enabled": false,
              "tag": "Untagged",
              "id": -70650,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (316)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -65402,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(3.884292, -8.559999, -3.849604),
                "rotation": new Quaternion(0, 0.4875008, 0, -0.8731226),
                "scale": new Vector3(0.5653808, 0.5653808, 0.5653808)
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
              "parent": -65402,
              "enabled": false,
              "tag": "Untagged",
              "id": -65400,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (38)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -60470,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(13.35199, -42.8857, 5.287704),
                "rotation": new Quaternion(0, -0.01437224, 0, -0.9998967),
                "scale": new Vector3(0.3164899, 0.3164898, 0.3164899)
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
              "parent": -60470,
              "enabled": false,
              "tag": "Untagged",
              "id": -60582,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (424)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -78544,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(14.21569, 16.4843, 4.669574),
                "rotation": new Quaternion(0, -0.01437224, 0, -0.9998967),
                "scale": new Vector3(0.2073895, 0.2073895, 0.2073895)
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
              "parent": -78544,
              "enabled": false,
              "tag": "Untagged",
              "id": -78542,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (392)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -77210,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(11.29569, -39.5197, 6.759455),
                "rotation": new Quaternion(0, -0.01437224, 0, -0.9998967),
                "scale": new Vector3(0.5762533, 0.5762533, 0.5762533)
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
              "parent": -77210,
              "enabled": false,
              "tag": "Untagged",
              "id": -77208,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (360)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -75856,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(7.933889, -33.8467, 9.165354),
                "rotation": new Quaternion(0, -0.01437224, 0, -0.9998967),
                "scale": new Vector3(1.000909, 1.000909, 1.000909)
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
              "parent": -75856,
              "enabled": false,
              "tag": "Untagged",
              "id": -75854,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (310)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -65376,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(13.24269, -42.8857, 1.890754),
                "rotation": new Quaternion(0, 0.4875008, 0, -0.8731226),
                "scale": new Vector3(0.123469, 0.123469, 0.123469)
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
              "parent": -65376,
              "enabled": false,
              "tag": "Untagged",
              "id": -65374,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (399)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -78442,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(14.14399, 16.4843, 2.443655),
                "rotation": new Quaternion(0, 0.4875008, 0, -0.8731226),
                "scale": new Vector3(0.08090678, 0.08090678, 0.08090678)
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
              "parent": -78442,
              "enabled": false,
              "tag": "Untagged",
              "id": -78546,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (367)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -77108,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(11.09669, -39.5197, 0.5743544),
                "rotation": new Quaternion(0, 0.4875008, 0, -0.8731226),
                "scale": new Vector3(0.2248079, 0.2248079, 0.2248079)
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
              "parent": -77108,
              "enabled": false,
              "tag": "Untagged",
              "id": -77212,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (335)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -75754,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(7.588289, -33.8467, -1.577546),
                "rotation": new Quaternion(0, 0.4875008, 0, -0.8731226),
                "scale": new Vector3(0.3904746, 0.3904746, 0.3904746)
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
              "parent": -75754,
              "enabled": false,
              "tag": "Untagged",
              "id": -75858,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (156)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -63516,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(4.384589, -19.14, 11.70545),
                "rotation": new Quaternion(0, -0.01437224, 0, -0.9998967),
                "scale": new Vector3(1.449249, 1.449248, 1.449249)
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
              "parent": -63516,
              "enabled": false,
              "tag": "Untagged",
              "id": -63514,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (324)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -70620,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(4.384589, -19.14, 11.70545),
                "rotation": new Quaternion(0, -0.01437224, 0, -0.9998967),
                "scale": new Vector3(1.449249, 1.449248, 1.449249)
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
              "parent": -70620,
              "enabled": false,
              "tag": "Untagged",
              "id": -70622,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (300)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -65322,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(3.884292, -19.14, -3.849604),
                "rotation": new Quaternion(0, 0.4875008, 0, -0.8731226),
                "scale": new Vector3(0.5653808, 0.5653808, 0.5653808)
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
              "parent": -65322,
              "enabled": false,
              "tag": "Untagged",
              "id": -65410,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (124)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -62548,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(7.05699, 6.9033, 9.818554),
                "rotation": new Quaternion(0, -0.01437224, 0, -0.9998967),
                "scale": new Vector3(1.116197, 1.116197, 1.116197)
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
              "parent": -62548,
              "enabled": false,
              "tag": "Untagged",
              "id": -62546,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (325)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -70624,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(7.05699, 6.9033, 9.818554),
                "rotation": new Quaternion(0, -0.01437224, 0, -0.9998967),
                "scale": new Vector3(1.116197, 1.116197, 1.116197)
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
              "parent": -70624,
              "enabled": false,
              "tag": "Untagged",
              "id": -70626,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (303)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -65334,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(6.67169, 6.9033, -2.161846),
                "rotation": new Quaternion(0, 0.4875008, 0, -0.8731226),
                "scale": new Vector3(0.4354506, 0.4354506, 0.4354506)
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
              "parent": -65334,
              "enabled": false,
              "tag": "Untagged",
              "id": -65348,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (92)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -61588,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(4.384589, 0, 11.70545),
                "rotation": new Quaternion(0, -0.01437224, 0, -0.9998967),
                "scale": new Vector3(1.449249, 1.449248, 1.449249)
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
              "parent": -61588,
              "enabled": false,
              "tag": "Untagged",
              "id": -61586,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (326)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -70628,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(4.384589, 0, 11.70545),
                "rotation": new Quaternion(0, -0.01437224, 0, -0.9998967),
                "scale": new Vector3(1.449249, 1.449248, 1.449249)
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
              "parent": -70628,
              "enabled": false,
              "tag": "Untagged",
              "id": -70644,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (305)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -65340,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(3.884292, 0, -3.849604),
                "rotation": new Quaternion(0, 0.4875008, 0, -0.8731226),
                "scale": new Vector3(0.5653808, 0.5653808, 0.5653808)
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
              "parent": -65340,
              "enabled": false,
              "tag": "Untagged",
              "id": -65378,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -55148,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(5.945489, -3.7137, 4.194154),
                "rotation": new Quaternion(0, 0.6968701, 0, -0.7171975),
                "scale": new Vector3(0.92045, 0.92045, 0.92045)
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
              "parent": -55148,
              "enabled": false,
              "tag": "Untagged",
              "id": -55146,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (311)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -65380,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(11.16972, -3.713699, -6.253485),
                "rotation": new Quaternion(0, 0.9621056, 0, -0.2726772),
                "scale": new Vector3(0.359086, 0.3590859, 0.359086)
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
              "parent": -65380,
              "enabled": false,
              "tag": "Untagged",
              "id": -65390,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (60)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -60566,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(5.945489, -28.2474, 4.194154),
                "rotation": new Quaternion(0, 0.6968701, 0, -0.7171975),
                "scale": new Vector3(0.92045, 0.92045, 0.92045)
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
              "parent": -60566,
              "enabled": false,
              "tag": "Untagged",
              "id": -60572,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (314)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -65394,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(11.16972, -28.2474, -6.253485),
                "rotation": new Quaternion(0, 0.9621056, 0, -0.2726772),
                "scale": new Vector3(0.359086, 0.3590859, 0.359086)
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
              "parent": -65394,
              "enabled": false,
              "tag": "Untagged",
              "id": -65392,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (159)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -63526,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(5.945489, -14.2937, 4.194154),
                "rotation": new Quaternion(0, 0.6968701, 0, -0.7171975),
                "scale": new Vector3(0.92045, 0.92045, 0.92045)
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
              "parent": -63526,
              "enabled": false,
              "tag": "Untagged",
              "id": -63524,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (301)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -65324,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(11.16972, -14.2937, -6.253485),
                "rotation": new Quaternion(0, 0.9621056, 0, -0.2726772),
                "scale": new Vector3(0.359086, 0.3590859, 0.359086)
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
              "parent": -65324,
              "enabled": false,
              "tag": "Untagged",
              "id": -65342,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (127)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -62558,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(11.01639, 12.0203, 4.288744),
                "rotation": new Quaternion(0, 0.6968701, 0, -0.7171975),
                "scale": new Vector3(0.5624778, 0.5624778, 0.5624778)
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
              "parent": -62558,
              "enabled": false,
              "tag": "Untagged",
              "id": -62556,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (306)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -65344,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(14.20879, 12.0203, -2.095746),
                "rotation": new Quaternion(0, 0.9621056, 0, -0.2726772),
                "scale": new Vector3(0.2194338, 0.2194338, 0.2194338)
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
              "parent": -65344,
              "enabled": false,
              "tag": "Untagged",
              "id": -65350,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (95)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -61598,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(8.25919, 5.2373, 4.033404),
                "rotation": new Quaternion(0, 0.6968701, 0, -0.7171975),
                "scale": new Vector3(0.7089214, 0.7089214, 0.7089214)
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
              "parent": -61598,
              "enabled": false,
              "tag": "Untagged",
              "id": -61596,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (307)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -65352,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(12.28289, 5.2373, -4.013246),
                "rotation": new Quaternion(0, 0.9621056, 0, -0.2726772),
                "scale": new Vector3(0.2765644, 0.2765644, 0.2765644)
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
              "parent": -65352,
              "enabled": false,
              "tag": "Untagged",
              "id": -65382,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (30)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -57596,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(5.776289, -8.559999, 16.99416),
                "rotation": new Quaternion(0, -0.01437224, 0, -0.9998967),
                "scale": new Vector3(1.449249, 1.449248, 1.449249)
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
              "parent": -57596,
              "enabled": false,
              "tag": "Untagged",
              "id": -57602,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (331)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -70648,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(5.776289, -8.559999, 16.99416),
                "rotation": new Quaternion(0, -0.01437224, 0, -0.9998967),
                "scale": new Vector3(1.449249, 1.449248, 1.449249)
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
              "parent": -70648,
              "enabled": false,
              "tag": "Untagged",
              "id": -70646,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (315)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -65398,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(0, -8.559999, 0),
                "rotation": new Quaternion(0, 0.4875008, 0, -0.8731226),
                "scale": new Vector3(0.5653808, 0.5653808, 0.5653808)
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
              "parent": -65398,
              "enabled": false,
              "tag": "Untagged",
              "id": -65396,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (62)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -60576,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(13.65589, -42.8857, 6.442655),
                "rotation": new Quaternion(0, -0.01437224, 0, -0.9998967),
                "scale": new Vector3(0.3164899, 0.3164898, 0.3164899)
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
              "parent": -60576,
              "enabled": false,
              "tag": "Untagged",
              "id": -60574,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (425)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -78548,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(14.41479, 16.4843, 5.426394),
                "rotation": new Quaternion(0, -0.01437224, 0, -0.9998967),
                "scale": new Vector3(0.2073895, 0.2073895, 0.2073895)
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
              "parent": -78548,
              "enabled": false,
              "tag": "Untagged",
              "id": -78556,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (393)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -77214,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(11.84899, -39.5197, 8.862354),
                "rotation": new Quaternion(0, -0.01437224, 0, -0.9998967),
                "scale": new Vector3(0.5762533, 0.5762533, 0.5762533)
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
              "parent": -77214,
              "enabled": false,
              "tag": "Untagged",
              "id": -77222,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (361)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -75860,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(8.895009, -33.8467, 12.81795),
                "rotation": new Quaternion(0, -0.01437224, 0, -0.9998967),
                "scale": new Vector3(1.000909, 1.000909, 1.000909)
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
              "parent": -75860,
              "enabled": false,
              "tag": "Untagged",
              "id": -75868,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (327)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -70630,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(13.65589, -42.8857, 6.442655),
                "rotation": new Quaternion(0, -0.01437224, 0, -0.9998967),
                "scale": new Vector3(0.3164899, 0.3164898, 0.3164899)
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
              "parent": -70630,
              "enabled": false,
              "tag": "Untagged",
              "id": -70654,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (427)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -78560,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(14.41479, 16.4843, 5.426394),
                "rotation": new Quaternion(0, -0.01437224, 0, -0.9998967),
                "scale": new Vector3(0.2073895, 0.2073895, 0.2073895)
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
              "parent": -78560,
              "enabled": false,
              "tag": "Untagged",
              "id": -78558,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (395)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -77226,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(11.84899, -39.5197, 8.862354),
                "rotation": new Quaternion(0, -0.01437224, 0, -0.9998967),
                "scale": new Vector3(0.5762533, 0.5762533, 0.5762533)
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
              "parent": -77226,
              "enabled": false,
              "tag": "Untagged",
              "id": -77224,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (363)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -75872,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(8.895009, -33.8467, 12.81795),
                "rotation": new Quaternion(0, -0.01437224, 0, -0.9998967),
                "scale": new Vector3(1.000909, 1.000909, 1.000909)
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
              "parent": -75872,
              "enabled": false,
              "tag": "Untagged",
              "id": -75870,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (312)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -65384,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(12.39449, -42.8857, 2.731454),
                "rotation": new Quaternion(0, 0.4875008, 0, -0.8731226),
                "scale": new Vector3(0.123469, 0.123469, 0.123469)
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
              "parent": -65384,
              "enabled": false,
              "tag": "Untagged",
              "id": -65404,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (428)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -78564,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(13.58819, 16.4843, 2.994555),
                "rotation": new Quaternion(0, 0.4875008, 0, -0.8731226),
                "scale": new Vector3(0.08090678, 0.08090678, 0.08090678)
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
              "parent": -78564,
              "enabled": false,
              "tag": "Untagged",
              "id": -78562,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (396)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -77230,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(9.55221, -39.5197, 2.105054),
                "rotation": new Quaternion(0, 0.4875008, 0, -0.8731226),
                "scale": new Vector3(0.2248079, 0.2248079, 0.2248079)
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
              "parent": -77230,
              "enabled": false,
              "tag": "Untagged",
              "id": -77228,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (364)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -75876,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(4.905689, -33.8467, 1.081155),
                "rotation": new Quaternion(0, 0.4875008, 0, -0.8731226),
                "scale": new Vector3(0.3904746, 0.3904746, 0.3904746)
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
              "parent": -75876,
              "enabled": false,
              "tag": "Untagged",
              "id": -75874,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (157)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -63518,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(5.776289, -19.14, 16.99416),
                "rotation": new Quaternion(0, -0.01437224, 0, -0.9998967),
                "scale": new Vector3(1.449249, 1.449248, 1.449249)
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
              "parent": -63518,
              "enabled": false,
              "tag": "Untagged",
              "id": -63530,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (328)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -70634,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(5.776289, -19.14, 16.99416),
                "rotation": new Quaternion(0, -0.01437224, 0, -0.9998967),
                "scale": new Vector3(1.449249, 1.449248, 1.449249)
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
              "parent": -70634,
              "enabled": false,
              "tag": "Untagged",
              "id": -70632,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (317)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -65408,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(0, -19.14, 0),
                "rotation": new Quaternion(0, 0.4875008, 0, -0.8731226),
                "scale": new Vector3(0.5653808, 0.5653808, 0.5653808)
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
              "parent": -65408,
              "enabled": false,
              "tag": "Untagged",
              "id": -65406,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (125)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -62550,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(8.128889, 6.9033, 13.89185),
                "rotation": new Quaternion(0, -0.01437224, 0, -0.9998967),
                "scale": new Vector3(1.116197, 1.116197, 1.116197)
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
              "parent": -62550,
              "enabled": false,
              "tag": "Untagged",
              "id": -62562,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (329)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -70638,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(8.128889, 6.9033, 13.89185),
                "rotation": new Quaternion(0, -0.01437224, 0, -0.9998967),
                "scale": new Vector3(1.116197, 1.116197, 1.116197)
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
              "parent": -70638,
              "enabled": false,
              "tag": "Untagged",
              "id": -70636,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (318)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -65414,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(3.680089, 6.9033, 0.8030546),
                "rotation": new Quaternion(0, 0.4875008, 0, -0.8731226),
                "scale": new Vector3(0.4354506, 0.4354506, 0.4354506)
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
              "parent": -65414,
              "enabled": false,
              "tag": "Untagged",
              "id": -65412,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (93)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -61590,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(5.776289, 0, 16.99416),
                "rotation": new Quaternion(0, -0.01437224, 0, -0.9998967),
                "scale": new Vector3(1.449249, 1.449248, 1.449249)
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
              "parent": -61590,
              "enabled": false,
              "tag": "Untagged",
              "id": -61602,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (330)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -70642,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(5.776289, 0, 16.99416),
                "rotation": new Quaternion(0, -0.01437224, 0, -0.9998967),
                "scale": new Vector3(1.449249, 1.449248, 1.449249)
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
              "parent": -70642,
              "enabled": false,
              "tag": "Untagged",
              "id": -70640,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
          "name": "JS-test33 (319)",
          "parent": -80504,
          "enabled": true,
          "tag": "Untagged",
          "id": -65418,
          "components": [
            {
              "name": "RotateCubeComponent",
              "props": {
                "speed": 0.96,
                "newProp": "",
                "v3Test": new Vector3(-1.57, 0, 0),
                "dwd": false,
                "cameraReferenc2e": "",
                "numberARR": [
                  0.0
                ],
                "color": new Color(1, 1, 1)
              }
            }
          ],
          "defaultComponents": [
            {
              "name": "TransformComponent",
              "props": {
                "position": new Vector3(0, 0, 0),
                "rotation": new Quaternion(0, 0.4875008, 0, -0.8731226),
                "scale": new Vector3(0.5653808, 0.5653808, 0.5653808)
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
              "parent": -65418,
              "enabled": false,
              "tag": "Untagged",
              "id": -65416,
              "components": [],
              "defaultComponents": [
                {
                  "name": "TransformComponent",
                  "props": {
                    "position": new Vector3(0, 1.871525, 0),
                    "rotation": new Quaternion(0, 0, 0, -1),
                    "scale": new Vector3(0.2040494, 0.2040494, 0.2040494)
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
    }
  ]
};