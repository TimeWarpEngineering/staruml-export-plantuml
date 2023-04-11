const { clipboard } = require('electron');

function convertToPlantUML(elements) {
  let plantUML = '@startuml\n';

  elements.forEach((element) => {
    // Include element documentation as comments
    if (element.documentation && element.documentation.trim() !== '') {
      plantUML += `' ${element.documentation.split('\n').join('\n\' ')}\n`;
    }

    // Include AI tag information as comments
    const aiTag = element.tags.find(tag => tag.name === 'AI');
    if (aiTag && aiTag.value) {
      plantUML += `' AI_CMD: ${aiTag.value}\n`;
    }

    if (element instanceof type.UMLClass) {
      plantUML += `class ${element.name} {\n`;

      element.attributes.forEach((attribute) => {
        plantUML += `  ${attribute.visibility || ''} ${attribute.name}: ${attribute.type}\n`;
      });

      element.operations.forEach((operation) => {
        plantUML += `  ${operation.visibility || ''} ${operation.name}(${operation.parameters.map(param => param.name + ': ' + param.type).join(', ')}): ${operation.returnType}\n`;
      });

      plantUML += '}\n';
    } else if (element instanceof type.UMLAssociation) {
      const end1 = element.end1;
      const end2 = element.end2;
      plantUML += `${end1.reference.name} ${end1.multiplicity ? `"${end1.multiplicity}"` : ''} -- ${end2.multiplicity ? `"${end2.multiplicity}"` : ''} ${end2.reference.name}`;

      if (element.name) {
        plantUML += ` : ${element.name}`;
      }

      plantUML += '\n';

    }
  });

  plantUML += '@enduml';

  return plantUML;
}



function copySelectedToClipboard() {
  // Get the currently selected elements using the StarUML API
  const selectedModels = app.selections.getSelectedModels();

  // Convert the selected elements to PlantUML syntax
  const plantUMLCode = convertToPlantUML(selectedModels);

  // Copy the generated PlantUML code to the clipboard
  clipboard.writeText(plantUMLCode);
}

function init() {
  app.commands.register('export-plantuml:copy-to-clipboard', copySelectedToClipboard);
}

exports.init = init;
