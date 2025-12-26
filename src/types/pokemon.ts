export interface Pokemon {
	abilities: Ability[];
	base_experience: number;
	forms: Form[];
	game_indices: Index[];
	height: number;
	held_items: any[];
	id: number;
	is_default: boolean;
	location_area_encounters: string;
	moves: Mfe[];
	name: string;
	order: number;
	past_types: any[];
	species: Species;
	sprites: Sprites;
	stats: Stat[];
	types: Type[];
	weight: number;
}

export interface Ability {
	ability: Ability2;
	is_hidden: boolean;
	slot: number;
}

export interface Ability2 {
	name: string;
	url: string;
}

export interface Form {
	name: string;
	url: string;
}

export interface Index {
	game_index: number;
	version: Version;
}

export interface Version {
	name: string;
	url: string;
}

export interface Mfe {
	move: Move;
	version_group_details: VersionGroupDetail[];
}

export interface Move {
	name: string;
	url: string;
}

export interface VersionGroupDetail {
	level_learned_at: number;
	move_learn_method: MoveLearnMethod;
	version_group: VersionGroup;
}

export interface MoveLearnMethod {
	name: string;
	url: string;
}

export interface VersionGroup {
	name: string;
	url: string;
}

export interface Species {
	name: string;
	url: string;
}

export interface Other {
	dream_world: Sprites;
	home: Sprites;
	'official-artwork': OfficialArtwork;
}

export interface Sprites {
	back_default?: string;
	back_female?: any;
	back_shiny?: string;
	back_shiny_female?: any;
	front_default?: string;
	front_female?: string;
	front_shiny?: string;
	front_shiny_female?: any;
	other?: Other;
	versions?: Versions;
	back_gray?: string;
	back_transparent?: string;
	front_gray?: string;
	front_transparent?: string;
	back_shiny_transparent?: string;
	front_shiny_transparent?: string;
	animated?: Animated;
}

export interface Animated {
	back_default: string;
	back_female: any;
	back_shiny: string;
	back_shiny_female: any;
	front_default: string;
	front_female: any;
	front_shiny: string;
	front_shiny_female: any;
}

export interface Icons {
	front_default: string;
	front_female: any;
}

export interface Icons2 {
	front_default: string;
	front_female: any;
}

export interface OfficialArtwork {
	front_default: string;
	front_shiny: string;
}

export interface Versions {
	'generation-i': GenerationI;
	'generation-ii': GenerationIi;
	'generation-iii': GenerationIii;
	'generation-iv': GenerationIv;
	'generation-v': GenerationV;
	'generation-vi': GenerationVi;
	'generation-vii': GenerationVii;
	'generation-viii': GenerationViii;
}

export interface GenerationI {
	'red-blue': Sprites;
	yellow: Sprites;
}

export interface GenerationIi {
	crystal: Sprites;
	gold: Sprites;
	silver: Sprites;
}

export interface GenerationIii {
	emerald: Sprites;
	'firered-leafgreen': Sprites;
	'ruby-sapphire': Sprites;
}

export interface GenerationIv {
	'diamond-pearl': Sprites;
	'heartgold-soulsilver': Sprites;
	platinum: Sprites;
}

export interface GenerationV {
	'black-white': Sprites;
}

export interface GenerationVi {
	'omegaruby-alphasapphire': Sprites;
	'x-y': Sprites;
}

export interface GenerationVii {
	icons: Icons;
	'ultra-sun-ultra-moon': Sprites;
}

export interface GenerationViii {
	icons: Icons2;
}

export interface Stat {
	base_stat: number;
	effort: number;
	stat: nameUrl[];
}

export interface Type {
	slot: number;
	type: nameUrl;
}

export interface nameUrl {
	name: string;
	url: string;
}
