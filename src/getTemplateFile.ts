import Prompt from 'prompts';
import kleur from 'kleur';

import { getQuestionsSettings } from './getQuestionsSettings';
import { FileOption } from './types';

export const getTemplateFile = async (name: string, files: FileOption[]) => {
    const { file } = await Prompt(
        {
            type: 'select',
            name: 'file',
            message: `Select type of ${kleur.reset().yellow(name)} file`,
            hint: 'Select using arrows and press Enter',
            choices: files.map((file) => ({ title: file.description, value: file })),
            initial: 0
        },
        getQuestionsSettings()
    );

    return file;
};
