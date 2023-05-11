export interface ThingThatiKnowStructure {
  name: string;
}

export interface ThingsThatiKnowDataStructure extends ThingThatiKnowStructure {
  id: string;
}

export interface ThingsThatiKnowApiStructure {
  thingsThatIKnow: ThingsThatiKnowDataStructure[];
}
