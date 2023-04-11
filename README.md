# StarUML to PlantUML Converter

This repository contains a plugin to convert StarUML models to PlantUML diagrams.
It's a simple and easy-to-use tool that extracts classes and associations from StarUML and generates PlantUML syntax to visualize them.

## Features

- Extracts UML Classes, attributes, operations, and associations
- Supports multiplicities on associations
- Includes element documentation as comments
- Supports AI tags to provide additional information to AI tools like ChatGPT

## How to use

1. Install the StarUML to PlantUML Converter plugin.
2. Open your StarUML model.
3. Select the elements you want to include in the PlantUML diagram.
4. Press the hotkey (`Ctrl+Shift+C` on Windows/Linux or `Cmd+Shift+C` on macOS) or select the menu item "Convert to PlantUML" to generate the PlantUML syntax.
5. The PlantUML syntax will be copied to your clipboard.
6. Paste the generated PlantUML syntax into a PlantUML editor or renderer, such as the [PlantUML Online Server](https://www.plantuml.com/plantuml/), or into the ChatGPT interface.

## Limitations

This plugin currently supports the following elements:
- UML Classes
- Class attributes
- Class operations
- Associations with multiplicities

It does not support:
- Other UML elements like interfaces, enumerations, or use cases
- Detailed formatting of the PlantUML diagram
- Advanced PlantUML features like notes, stereotypes, or colors

Please note that this plugin is a starting point and may require manual adjustments to the generated PlantUML syntax depending on your specific model and visualization preferences.

## Contributing

Feel free to submit issues, bug reports, or feature requests through the GitHub repository.
Contributions are welcome through pull requests.
