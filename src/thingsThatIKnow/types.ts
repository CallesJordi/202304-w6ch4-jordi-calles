export interface ThingThatiKnowStructure {
  name: string;
}

export interface ThingsThatiKnowDataStructure extends ThingThatiKnowStructure {
  id: number;
}

export interface ThingsThatiKnowApiStructure {
  thingsThatIKnow: ThingsThatiKnowDataStructure[];
}
