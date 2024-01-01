import {definePlugin} from 'sanity'
import iconManagerSetup from '../lib/iconManagerSetup'
import IconManagerObject from '../schemas/objects/IconManager'
import IconManagerAuthorObject from '../schemas/objects/IconManagerAuthor'
import IconManagerColorObject from '../schemas/objects/IconManagerColor'
import IconManagerLicenseObject from '../schemas/objects/IconManagerLicense'
import IconManagerMetadataObject from '../schemas/objects/IconManagerMetadata'
import IconManagerRGBAObject from '../schemas/objects/IconManagerRgba'
import IconManagerSizeObject from '../schemas/objects/IconManagerSize'
import IconManagerPluginOptions from '../types/IconManagerPluginOptions'

export const IconManager = definePlugin<void | IconManagerPluginOptions>((config) => {
  iconManagerSetup(config)

  return {
    name: `sanity-plugin-icon-manager`,
    schema: {
      types: [
        IconManagerRGBAObject(),
        IconManagerColorObject(),
        IconManagerSizeObject(),
        IconManagerAuthorObject(),
        IconManagerLicenseObject(),
        IconManagerMetadataObject(),
        IconManagerObject(config),
      ],
    },
  }
})
