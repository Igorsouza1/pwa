
const treinox = [
    [1.43,1.31,0.3,1.35,0.45,0.45,1.35,0.41,1.0,0.94,0.91,0  ],
    [1.52,1.45,0.38,1.48,0.61,0.56,1.47,0.45,1.22,0.97,0.8,0  ],
    [1.34,1.36,0.34,1.37,0.43,0.46,1.36,0.44,1.05,1.01,0.96,0  ],
    [1.36,1.3,0.32,1.35,0.43,0.56,1.35,0.44,1.33,0.99,0.79,1  ],
    [1.45,1.37,0.34,1.4,0.42,0.52,1.38,0.46,1.24,0.95,0.88,0  ],
    [1.43,1.33,0.37,1.42,0.57,0.56,1.41,0.46,1.19,0.99,0.82,1  ],
    [1.42,1.36,0.29,1.39,0.48,0.53,1.4,0.4,1.2,0.99,0.75,0  ],
    [1.47,1.34,0.32,1.42,0.56,0.54,1.39,0.43,1.13,0.95,0.8,1  ],
    [1.44,1.38,0.36,1.43,0.53,0.54,1.41,0.49,1.29,0.98,0.91,0  ],
    [1.5,1.46,0.38,1.52,0.56,0.65,1.52,0.45,1.44,1.01,0.69,0  ],
    [1.46,1.36,0.35,1.47,0.58,0.6,1.48,0.46,1.33,1.01,0.77,0  ],
    [1.43,1.35,0.37,1.4,0.53,0.59,1.41,0.44,1.34,0.99,0.75,1  ],
    [1.39,1.36,0.29,1.38,0.45,0.51,1.36,0.42,1.21,0.98,0.82,0  ],
    [1.35,1.33,0.31,1.38,0.44,0.5,1.36,0.41,1.19,1.01,0.82,0  ],
    [1.4,1.31,0.31,1.28,0.4,0.5,1.31,0.45,1.22,0.94,0.9,1  ],
    [1.4,1.37,0.41,1.39,0.56,0.63,1.37,0.48,1.26,0.98,0.76,1  ],
    [1.41,1.36,0.34,1.4,0.45,0.5,1.32,0.4,1.16,0.94,0.8,1  ],
    [1.45,1.4,0.34,1.45,0.56,0.58,1.44,0.47,1.18,0.99,0.81,0  ],
    [1.39,1.36,0.32,1.39,0.53,0.5,1.38,0.4,1.22,0.99,0.8,1  ],
    [1.41,1.41,0.3,1.45,0.49,0.57,1.45,0.42,1.24,1.03,0.74,0  ],
    [1.48,1.31,0.36,1.39,0.58,0.64,1.37,0.45,1.31,0.93,0.7,1  ],
    [1.39,1.31,0.25,1.37,0.46,0.5,1.36,0.4,0.96,0.98,0.8,0  ],
    [1.42,1.38,0.36,1.44,0.54,0.53,1.42,0.44,1.23,1,0.83,0  ],
    [1.4,1.3,0.31,1.38,0.57,0.66,1.36,0.45,1.35,0.97,0.68,1  ],
    [1.48,1.42,0.36,1.49,0.49,0.48,1.49,0.47,1.09,1.01,0.98,0  ],
    [1.32,1.36,0.24,1.37,0.45,0.54,1.37,0.38,1.26,1.04,0.7,0  ],
    [1.45,1.34,0.4,1.41,0.57,0.57,1.41,0.47,1.16,0.97,0.82,0  ],
    [1.42,1.27,0.34,1.39,0.55,0.58,1.35,0.47,1.41,0.95,0.81,1  ],
    [1.42,1.35,0.32,1.34,0.55,0.61,1.32,0.46,1.24,0.93,0.75,1  ],
    [1.37,1.34,0.3,1.39,0.48,0.52,1.37,0.4,1.27,1,0.77,1  ],
    [1.4,1.35,0.27,1.37,0.43,0.53,1.38,0.38,1.18,0.99,0.72,0  ],
    [1.44,1.39,0.34,1.43,0.55,0.56,1.43,0.44,1.24,0.99,0.79,1  ],
    [1.38,1.33,0.27,1.37,0.44,0.46,1.37,0.38,1.07,0.99,0.83,0  ],
    [1.43,1.35,0.33,1.39,0.51,0.61,1.39,0.41,1.3,0.97,0.67,1  ],
    [1.41,1.37,0.32,1.42,0.46,0.5,1.39,0.42,1.16,0.99,0.84,0  ],
    [1.42,1.38,0.33,1.41,0.53,0.58,1.39,0.4,1.41,0.98,0.69,1  ],
    [1.46,1.4,0.36,1.43,0.47,0.46,1.3,0.42,1.05,0.89,0.91,1  ],
    [1.4,1.33,0.28,1.37,0.47,0.44,1.37,0.47,0.94,0.98,1.07,0  ],
    [1.41,1.34,0.36,1.4,0.54,0.59,1.39,0.43,1.34,0.99,0.73,1  ],
    [1.45,1.38,0.33,1.41,0.43,0.44,1.34,0.42,0.98,0.92,0.95,1  ],
    [1.37,1.34,0.3,1.35,0.46,0.5,1.36,0.41,1.16,0.99,0.82,0  ],
    [1.44,1.35,0.31,1.41,0.55,0.56,1.4,0.45,1.24,0.97,0.8,1  ],
    [1.51,1.36,0.41,1.47,0.53,0.62,1.45,0.51,1.192307692,0.960264901,0.822580645,1  ],
    [1.48,1.39,0.34,1.46,0.6,0.64,1.45,0.43,1.28,0.98,0.67,0  ],
    [1.37,1.35,0.3,1.38,0.47,0.48,1.37,0.39,1.2,1,0.81,1  ],
    [1.41,1.36,0.32,1.4,0.54,0.56,1.38,0.42,1.4,0.98,0.75,1  ],
    [1.48,1.38,0.35,1.46,0.6,0.66,1.45,0.46,1.32,0.98,0.7,0  ],
    [1.5,1.4,0.34,1.4,0.47,0.6,1.39,0.39,1.4,0.93,0.65,0  ],
    [1.42,1.34,0.32,1.37,0.57,0.56,1.36,0.41,1.33,0.96,0.73,1  ],
    [1.53,1.36,0.42,1.44,0.58,0.57,1.44,0.51,1.0555555559999998,0.941176471,0.894736842,0  ],
    [1.42,1.34,0.28,1.39,0.46,0.57,1.37,0.42,1.3,0.96,0.74,0  ],
    [1.39,1.33,0.33,1.38,0.57,0.54,1.35,0.43,1.29,0.97,0.8,1  ],
    [1.31,1.33,0.28,1.36,0.45,0.5,1.35,0.4,1.16,1.03,0.8,0  ],
    [1.43,1.32,0.37,1.4,0.59,0.57,1.38,0.48,1.19,0.97,0.84,1  ],
    [1.43,1.4,0.32,1.44,0.56,0.55,1.41,0.43,1.25,0.99,0.78,1  ],
    [1.45,1.36,0.36,1.48,0.59,0.58,1.46,0.36,1.26,1.01,0.62,0  ],
    [1.52,1.45,0.38,1.48,0.61,0.56,1.47,0.45,1.22,0.97,0.8,0  ],
    [1.47,1.38,0.43,1.44,0.59,0.68,1.44,0.54,1.24,0.98,0.79,0  ],
    [1.43,1.37,0.36,1.42,0.54,0.53,1.41,0.42,1.26,0.99,0.79,1  ],
    [1.4,1.33,0.3,1.36,0.43,0.54,1.35,0.41,1.29,0.96,0.76,0  ],
    [1.45,1.42,0.33,1.45,0.55,0.53,1.43,0.42,1.26,0.99,0.79,1  ],
    [1.36,1.33,0.29,1.37,0.48,0.53,1.35,0.49,1.26,0.99,0.92,1  ],
    [1.45,1.37,0.3,1.41,0.46,0.47,1.39,0.45,1.0,0.96,0.96,0  ],
    [1.36,1.36,0.34,1.31,0.47,0.48,1.31,0.48,1.12,0.96,1,1  ],
    [1.4,1.43,0.33,1.43,0.47,0.57,1.39,0.43,1.19,0.99,0.75,0  ],
    [1.4,1.34,0.31,1.36,0.47,0.47,1.36,0.45,1.0,0.97,0.96,0  ],
    [1.4,1.36,0.33,1.4,0.55,0.52,1.37,0.42,1.24,0.98,0.81,1  ],
    [1.4,1.32,0.31,1.37,0.47,0.49,1.35,0.41,1.26,0.96,0.84,0  ],
    [1.42,1.36,0.34,1.37,0.48,0.53,1.36,0.42,1.18,0.96,0.79,0  ],
    [1.45,1.38,0.39,1.45,0.48,0.68,1.43,0.48,1.48,0.99,0.71,0  ],
    [1.49,1.4,0.35,1.46,0.44,0.6,1.45,0.45,1.22,0.97,0.75,1  ],
    [1.43,1.33,0.3,1.41,0.55,0.55,1.39,0.44,1.2,0.97,0.8,1  ],
    [1.5,1.4,0.38,1.41,0.48,0.54,1.4,0.5,1.15,0.93,0.93,0  ],
    [1.38,1.3,0.31,1.39,0.51,0.55,1.36,0.43,1.25,0.99,0.78,1  ],
    [1.44,1.36,0.32,1.42,0.61,0.58,1.41,0.44,1.09,0.98,0.76,1  ],
    [1.5,1.42,0.36,1.5,0.55,0.6,1.49,0.45,1.22,0.99,0.75,0  ],
    [1.4,1.33,0.33,1.35,0.45,0.42,1.35,0.45,0.84,0.96,1.07,0  ],
    [1.41,1.35,0.35,1.4,0.55,0.5,1.41,0.44,1.28,1,0.88,0  ],
    [1.3,1.32,0.29,1.35,0.45,0.55,1.35,0.42,1.28,1.04,0.76,0  ],
    [1.48,1.43,0.36,1.4,0.47,0.59,1.38,0.46,1.23,0.93,0.78,0  ],
    [1.4,1.34,0.36,1.41,0.47,0.6,1.38,0.49,1.4,0.99,0.82,1  ],
    [1.4,1.34,0.32,1.4,0.56,0.52,1.37,0.41,1.27,0.98,0.79,1  ],
    [1.38,1.39,0.34,1.42,0.46,0.43,1.38,0.45,1.02,1,1.05,0  ],
    [1.47,1.37,0.38,1.47,0.57,0.6,1.44,0.47,1.3,0.98,0.78,0  ],
    [1.47,1.44,0.36,1.47,0.45,0.46,1.33,0.47,1.02,0.9,1.02,1  ],
    [1.39,1.37,0.31,1.4,0.49,0.44,1.34,0.42,0.98,0.96,0.95,1  ],
    [1.4,1.34,0.34,1.39,0.46,0.46,1.31,0.45,1.12,0.94,0.98,1  ],
    [1.46,1.32,0.33,1.4,0.57,0.53,1.38,0.46,1.23,0.95,0.87,1  ],
    [1.4,1.31,0.33,1.41,0.56,0.64,1.37,0.46,1.36,0.98,0.72,1  ],
    [1.33,1.25,0.31,1.27,0.4,0.47,1.27,0.42,1.21,0.95,0.89,1  ],
    [1.42,1.38,0.32,1.44,0.5,0.5,1.41,0.43,1.19,0.99,0.86,1  ],
    [1.41,1.34,0.34,1.42,0.56,0.64,1.4,0.47,1.36,0.99,0.73,1  ],
    [1.45,1.37,0.33,1.36,0.47,0.46,1.36,0.46,1.1,0.94,1,0  ],
    [1.42,1.38,0.32,1.41,0.46,0.25,1.33,0.46,0.61,0.94,1.84,1  ],
    [1.41,1.36,0.36,1.4,0.56,0.54,1.38,0.4,1.35,0.98,0.74,1  ],
    [1.44,1.34,0.32,1.39,0.56,0.49,1.4,0.43,1.17,0.97,0.88,0  ],
    [1.38,1.33,0.32,1.38,0.56,0.52,1.35,0.42,1.21,0.98,0.81,1  ],
    [1.35,1.35,0.34,1.37,0.45,0.52,1.37,0.46,1.13,1.01,0.88,0  ],
    [1.4,1.35,0.33,1.36,0.49,0.5,1.33,0.48,1.02,0.95,0.96,1  ],
    [1.45,1.38,0.39,1.45,0.48,0.68,1.43,0.48,1.48,0.99,0.71,0  ],
    [1.43,1.36,0.38,1.41,0.55,0.6,1.41,0.44,1.36,0.99,0.73,1  ],
    [1.43,1.37,0.31,1.41,0.58,0.53,1.4,0.39,1.39,0.98,0.74,1  ],
    [1.4,1.3,0.33,1.31,0.43,0.46,1.31,0.46,1.07,0.94,1,1  ],
    [1.41,1.36,0.3,1.42,0.58,0.55,1.4,0.46,1.28,0.99,0.84,1  ],
    [1.45,1.38,0.34,1.43,0.46,0.55,1.33,0.44,1.25,0.92,0.8,1  ],
    [1.47,1.36,0.39,1.44,0.59,0.7,1.44,0.47,1.4,0.98,0.67,0  ],
    [1.44,1.43,0.36,1.49,0.49,0.49,1.49,0.47,1.09,1.03,0.96,0  ],
    [1.42,1.36,0.35,1.44,0.6,0.64,1.42,0.45,1.45,1,0.7,0  ],
    [1.48,1.44,0.35,1.49,0.56,0.57,1.46,0.42,1.33,0.99,0.74,0  ],
    [1.45,1.3,0.26,1.35,0.46,0.46,1.35,0.42,1.0,0.93,0.91,0  ],
    [1.43,1.34,0.34,1.42,0.55,0.53,1.42,0.46,1.29,0.99,0.87,1  ],
    [1.42,1.34,0.37,1.4,0.56,0.59,1.39,0.44,1.37,0.98,0.75,1  ],
    [1.4,1.33,0.32,1.37,0.54,0.55,1.36,0.44,1.34,0.97,0.8,1  ],
    [1.37,1.3,0.34,1.37,0.56,0.66,1.35,0.45,1.43,0.99,0.68,1  ],
    [1.43,1.35,0.3,1.38,0.46,0.46,1.38,0.44,1.0,0.97,0.96,0  ],
    [1.48,1.41,0.36,1.42,0.58,0.61,1.42,0.45,1.42,0.96,0.74,0  ],
    [1.51,1.35,0.22,1.4,0.45,0.47,1.38,0.38,1.04,0.91,0.81,0  ],
    [1.42,1.31,0.32,1.41,0.55,0.65,1.38,0.44,1.38,0.97,0.68,1  ],
    [1.45,1.4,0.36,1.45,0.64,0.55,1.43,0.43,1.31,0.99,0.78,0  ],
    [1.43,1.37,0.3,1.4,0.46,0.54,1.4,0.48,1.17,0.98,0.89,0  ],
    [1.38,1.33,0.33,1.37,0.55,0.47,1.35,0.41,1.0,0.98,0.87,0  ],
    [1.4,1.32,0.34,1.36,0.45,0.54,1.35,0.45,1.2,0.96,0.83,0  ],
    [1.39,1.35,0.34,1.38,0.54,0.54,1.37,0.42,1.32,0.99,0.78,1  ],
    [1.43,1.33,0.28,1.37,0.46,0.44,1.37,0.4,1.02,0.96,0.91,0  ],
    [1.47,1.43,0.34,1.48,0.54,0.53,1.45,0.42,1.26,0.99,0.79,0  ],
    [1.37,1.33,0.29,1.37,0.44,0.53,1.35,0.43,1.23,0.99,0.81,0  ],
    [1.45,1.42,0.36,1.44,0.47,0.46,1.32,0.46,1.02,0.91,1,1  ],
    [1.45,1.4,0.32,0.45,0.47,0.52,1.39,0.44,1.16,0.96,0.85,0  ],
    [1.5,1.44,0.34,1.47,0.46,0.59,1.43,0.45,1.28,0.95,0.76,0  ],
    [1.44,1.36,0.38,1.42,0.55,0.59,1.42,0.44,1.34,0.99,0.75,1  ],
    [1.42,1.41,0.36,1.38,0.57,0.63,1.4,0.43,1.4,0.99,0.68,0  ],
    [1.43,1.37,0.35,1.41,0.43,0.52,1.41,0.43,1.24,0.99,0.83,0  ],
    [1.39,1.36,0.34,1.39,0.52,0.5,1.37,0.4,1.22,0.99,0.8,1  ],
    [1.42,1.36,0.34,1.43,0.59,0.66,1.42,0.46,1.43,1,0.7,1  ],
    [1.45,1.39,0.38,1.43,0.58,0.6,1.43,0.45,1.3,0.99,0.75,0  ],
    [1.4,1.35,0.3,1.39,0.45,0.54,1.31,0.43,1.23,0.94,0.8,1  ],
    [1.4,1.36,0.33,1.39,0.44,0.53,1.38,0.44,1.2,0.99,0.83,0  ],
    [1.51,1.36,0.38,1.45,0.62,0.67,1.43,0.46,1.34,0.95,0.69,1  ],
    [1.43,1.31,0.31,1.4,0.58,0.64,1.38,0.46,1.39,0.97,0.72,1  ],
    [1.37,1.33,0.3,1.37,0.46,0.49,1.35,0.41,1.22,0.99,0.84,1  ],
    [1.41,1.38,0.37,1.42,0.54,0.5,1.41,0.41,1.25,1,0.82,0  ],
    [1.45,1.33,0.38,1.42,0.56,0.57,1.4,0.46,1.16,0.97,0.81,0  ],
    [1.48,1.38,0.38,1.47,0.61,0.69,1.45,0.51,1.33,0.98,0.74,1  ],
    [1.45,1.4,0.34,1.44,0.53,0.55,1.44,0.42,1.28,0.99,0.76,0  ],
    [1.41,1.38,0.33,1.4,0.57,0.55,1.41,0.41,1.2,1,0.75,0  ],
    [1.43,1.36,0.32,1.41,0.53,0.52,1.4,0.41,1.21,0.98,0.79,0  ],
    [1.43,1.35,0.31,1.42,0.47,0.49,1.39,0.48,1.02,0.97,0.98,0  ],
    [1.35,1.32,0.31,1.33,0.51,0.5,1.31,0.46,1.11,0.97,0.92,1  ],
    [1.35,1.32,0.34,1.36,0.47,0.51,1.35,0.43,1.24,1,0.84,0  ],
    [1.44,1.38,0.35,1.37,0.58,0.57,1.36,0.47,1.21,0.94,0.82,0  ],
    [1.45,1.35,0.35,1.39,0.53,0.55,1.39,0.45,1.22,0.96,0.82,1  ],
    [1.43,1.35,0.38,1.43,0.58,0.7,1.42,0.47,1.46,0.99,0.67,1  ],
    [1.48,1.34,0.37,1.4,0.58,0.66,1.4,0.47,1.38,0.95,0.71,1  ],
    [1.5,1.41,0.33,1.42,0.5,0.55,1.4,0.5,1.17,0.93,0.91,0  ],
    [1.38,1.33,0.26,1.37,0.43,0.52,1.35,0.42,1.21,0.98,0.81,0  ],
    [1.38,1.33,0.28,1.37,0.46,0.5,1.35,0.4,1.14,0.98,0.8,0  ],
    [1.45,1.36,0.33,1.36,0.45,0.51,1.35,0.46,1.13,0.93,0.9,0  ],
    [1.41,1.39,0.32,1.42,0.54,0.53,1.4,0.41,1.32,0.99,0.77,1  ],
    [1.38,1.35,0.31,1.38,0.44,0.51,1.36,0.41,1.27,0.99,0.8,0  ],
    [1.4,1.33,0.37,1.38,0.55,0.59,1.38,0.43,1.37,0.99,0.73,1  ],
    [1.51,1.34,0.37,1.44,0.6,0.7,1.41,0.48,1.46,0.93,0.69,1  ],
    [1.39,1.29,0.35,1.36,0.55,0.65,1.35,0.49,1.38,0.97,0.75,1  ],
    [1.45,1.32,0.34,1.42,0.59,0.64,1.4,0.46,1.33,0.97,0.72,1  ],
    [1.39,1.31,0.26,1.35,0.46,0.46,1.35,0.42,1.05,0.97,0.91,0  ],
    [1.38,1.37,0.37,1.41,0.46,0.49,1.3,0.43,1.07,0.94,0.88,1  ],
    [1.42,1.33,0.3,1.34,0.45,0.5,1.35,0.38,1.16,0.95,0.76,0  ],
    [1.46,1.29,0.35,1.39,0.5,0.56,1.36,0.46,1.51,0.93,0.82,1  ],
    [1.42,1.36,0.31,1.38,0.46,0.54,1.37,0.43,1.23,0.96,0.8,0  ],
    [1.48,1.34,0.35,1.42,0.55,0.55,1.41,0.47,1.38,0.95,0.85,1  ],
    [1.43,1.37,0.31,1.42,0.52,0.55,1.41,0.45,1.38,0.99,0.82,1  ],
    [1.38,1.34,0.27,1.37,0.44,0.5,1.37,0.42,1.14,0.99,0.84,0  ],
    [1.48,1.43,0.35,1.46,0.52,0.62,1.46,0.46,1.27,0.99,0.74,1  ],
    [1.36,0.51,0.33,1.4,0.47,0.51,1.39,0.45,1.06,1.02,0.88,1  ],
    [1.42,1.36,0.33,1.45,0.55,0.52,1.42,0.46,1.18,1,0.88,0  ],
    [1.48,1.41,0.37,1.47,0.57,0.69,1.46,0.45,1.5,0.99,0.65,1  ],
    [1.33,1.29,0.32,1.35,0.48,0.5,1.31,0.42,1.11,0.98,0.84,0  ],
    [1.44,1.41,0.34,1.44,0.58,0.52,1.43,0.43,1.24,0.99,0.83,0  ],
    [1.46,1.38,0.35,1.44,0.59,0.72,1.43,0.52,1.38,0.98,0.72,1  ],
    [1.49,1.39,0.39,1.4,0.55,0.59,1.38,0.46,1.23,0.93,0.78,0  ],
    [1.57,1.35,0.38,1.47,0.61,0.74,1.44,0.5,1.4,0.92,0.68,1  ],
    [1.45,1.4,0.35,1.45,0.57,0.55,1.43,0.41,1.31,0.99,0.75,0  ],
    [1.42,1.35,0.3,1.39,0.44,0.47,1.37,0.43,1.07,0.96,0.91,0  ],
    [1.43,1.35,0.33,1.38,0.47,0.43,1.38,0.46,0.91,0.97,1.07,0  ],
    [1.36,1.35,0.28,1.38,0.45,0.5,1.36,0.44,1.19,1,0.88,0  ],
    [1.37,1.33,0.28,1.34,0.43,0.49,1.35,0.4,1.17,0.99,0.82,0  ],
    [1.43,1.32,0.33,1.38,0.57,0.67,1.36,0.44,1.52,0.95,0.66,1  ],
    [1.45,1.37,0.37,1.45,0.59,0.59,1.43,0.46,1.26,0.99,0.78,0  ],
    [1.43,1.39,0.26,1.42,0.45,0.52,1.4,0.39,1.24,0.98,0.75,0  ],
    [1.45,1.4,0.34,1.44,0.53,0.55,1.44,0.42,1.28,0.99,0.76,0  ],
    [1.4,1.31,0.31,1.35,0.44,0.51,1.35,0.43,1.21,0.96,0.84,1  ],
    [1.42,1.36,0.35,1.44,0.6,0.64,1.42,0.45,1.45,1,0.7,0  ],
    [1.43,1.37,0.35,1.42,0.55,0.58,1.4,0.47,1.26,0.98,0.81,0  ],
    [1.46,1.4,0.37,1.44,0.56,0.52,1.43,0.43,1.21,0.98,0.83,0  ],
    [1.46,1.4,0.36,1.43,0.59,0.5,1.44,0.44,1.19,0.99,0.88,0  ],
    [1.41,1.34,0.33,1.38,0.57,0.54,1.37,0.43,1.2,0.97,0.8,1  ],
    [1.46,1.4,0.37,1.45,0.55,0.51,1.43,0.41,1.24,0.98,0.8,0  ],
    [1.4,1.3,0.33,1.39,0.57,0.64,1.37,0.44,1.39,0.98,0.69,1  ],
    [1.45,1.37,0.39,1.43,0.52,0.56,1.41,0.47,1.22,0.97,0.84,1  ],
    [1.45,1.38,0.36,1.42,0.56,0.65,1.41,0.45,1.44,0.97,0.69,0  ],
    [1.39,1.31,0.31,1.39,0.54,0.63,1.36,0.42,1.4,0.98,0.67,1  ],
    [1.48,1.39,0.34,1.46,0.6,0.64,1.45,0.43,1.28,0.98,0.67,0  ],
    [1.47,1.35,0.36,1.42,0.55,0.6,1.43,0.49,1.46,0.97,0.82,1  ],
    [1.43,1.37,0.27,1.42,0.51,0.52,1.41,0.42,1.3,0.99,0.81,1  ],
    [1.37,1.37,0.27,1.38,0.45,0.48,1.37,0.38,1.12,1,0.79,0  ],
    [1.33,1.31,0.32,1.33,0.46,0.45,1.3,0.45,0.98,0.98,1,1  ],
    [1.46,1.36,0.38,1.45,0.52,0.57,1.44,0.44,1.21,0.99,0.77,0  ],
    [1.38,1.36,0.27,1.4,0.48,0.5,1.4,0.37,1.25,1.01,0.74,0  ],
    [1.43,1.34,0.35,1.42,0.54,0.61,1.41,0.48,1.36,0.99,0.79,1  ],
    [1.45,1.41,0.33,0.46,0.48,0.59,1.38,0.43,1.28,0.95,0.73,0  ],
    [1.45,1.32,0.3,1.36,0.5,0.48,1.36,0.42,1.04,0.94,0.88,0  ],
    [1.33,1.31,0.32,1.33,0.46,0.45,1.3,0.45,0.98,0.98,1,0  ],
    [1.38,1.34,0.3,1.38,0.46,0.48,1.36,0.39,1.26,0.99,0.81,1  ],
    [1.42,1.32,0.35,1.39,0.55,0.57,1.37,0.44,1.24,0.96,0.77,1  ],
    [1.4,1.31,0.34,1.4,0.54,0.66,1.37,0.47,1.47,0.98,0.71,1  ],
    [1.5,1.34,0.32,1.41,0.59,0.6,1.39,0.45,1.05,0.93,0.75,1  ],
    [1.42,1.37,0.27,1.39,0.42,0.52,1.38,0.39,1.24,0.97,0.75,0  ],
    [1.42,1.33,0.37,1.39,0.58,0.53,1.38,0.42,1.13,0.97,0.79,1  ],
    [1.38,1.36,0.32,1.41,0.44,0.49,1.37,0.4,1.11,0.99,0.82,0  ],
    [1.41,1.38,0.28,1.39,0.44,0.51,1.38,0.4,1.13,0.98,0.78,0  ],
    [1.42,1.32,0.29,1.36,0.42,0.5,1.35,0.4,1.16,0.95,0.8,0  ],
    [1.44,1.38,0.35,1.43,0.46,0.4,1.31,0.44,0.95,0.91,1.1,1  ]
  ]

  module.exports = treinox;
