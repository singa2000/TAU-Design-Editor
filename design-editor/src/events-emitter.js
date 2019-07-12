'use babel';

import EventEmitter from 'events';

const eventEmitter = new EventEmitter();

const EVENTS = {
	ElementDrag: 'design-area-element-drag',
	ElementDragStop: 'closet-editor:ElementDragStop',
	ElementDragStart: 'closet-editor:ElementDragStart',
	AssistantViewResized : 'assistant-view-manager:AssistantViewResized',
	OpenAssistantWizard: 'assistant:AssistantWizardOpen',
	AssistantWizardAccepted: 'assistant:AssistantWizardAccepted',
	OpenPanel : 'panel-manager:OpenPanel',
	ClosePanel : 'panel-manager:ClosePanel',
	StatusBarIsReady : 'global:StatusBarIsReady',
	ActiveEditorUpdated : 'global:ActiveEditorUpdated',
	ElementSelected : 'global:Element.selected',
	ElementDeselected : 'global:Element.deselected',
	EditorConfigChanged: 'global:EditorConfigChanged',
	RequestCurrentSelection : 'select-layer:requestCurrentSelection',
	OpenNewProject : 'project-wizard:openNewProject',
	OpenAppPackageManager: 'app-package:openAppPackage',
	CreateNewPage : 'page-wizard:createNewPage',
	PageWizardOpen: 'page-wizard:open',
	ProjectInfoLoaded : 'global:ProjectInfoLoaded',
	ToggleAnimationPanel: 'panel-manager:ToggleAnimationPanel',
	AssistantViewStateChange : 'pane-manager:AssistantViewStateChange',
	ShowAssistantHighlighter : 'assistant-view-manager:ShowAssistantHighlighter',
	HideAssistantHighlighter : 'assistant-view-manager:HideAssistantHighlighter',
	StopAssistantPointerEvents : 'assistant-view-manager:StopAssistantPointerEvents',
	StartAssistantPointerEvents : 'assistant-view-manager:StartAssistantPointerEvents',
	InsertComponent: 'pane-manager:InsertComponent',
	ComponentDragged: 'panel-compoent:ComponentDragged',
	DocumentDirty: 'document:dirty',
	DocumentClean: 'document:clean',
	DocumentSave: 'document:save',
	MultiappUpdate: 'multiapp:update',
	Lock : 'global:Element.lock',
	Unlock : 'global:Element.unlock',
	Atom: {
		onDidChangeActivePaneItem: 'atom:onDidChangeActivePaneItem',
		onDidChangePaths: 'atom:onDidChangePaths'
	},
	ChangeStyle: 'closet-editor:styleChanged',
	ChangeAttribute: 'closet-editor:attributeChanged',
	ElementInserted: 'closet-editor:elementInserted',
	StyleInserted: 'closet-editor:styleInserted',
	ScriptInserted: 'closet-editor:scriptInserted',
	ElementMoved: 'closet-editor:elementMoved',
	ElementDeleted: 'closet-editor:elementDeleted',
	ChangeContent:  'closet-editor:contentChanged',
	AnimationEventEdited: 'context-menu:animationEventEdited',
	AnimationEventRemoved: 'context-menu:animationEventRemoved',
	AnimationLabelEdited: 'context-menu:animationLabelEdited',
	AnimationLabelRemoved: 'context-menu:animationLabelRemoved',
	Show : 'closet-editor:show',
	Hide : 'closet-editor:hide',
	ToggleEditor : 'pane-manager:ToggleEditor',
	ToggleAssistantView : 'panel-manager:ToggleAssistantView',
	OpenAssistantView : 'panel-manager:OpenAssistantView',
	CloseAssistantView : 'panel-manager:CloseAssistantView',
	TogglePreviewView: 'stage-manager:togglePreviewView',
	ToggleInteractionView: 'stage-manager:toggleInteractionView',
	ToggleDesignAndCodeView: 'stage-manager:toggleDesignAndCodeView',
	ToggleStructureElement: 'stage-manager:toggleStructureElement',
	ToggleButtonOnToolbar: 'toolbar-element:toggleButtonOnToolbar',
	ToggleEditMode: 'interaction:ToggleEditMode',
	ToggleLayoutDetail: 'toolbar-element:toggleLayoutDetail',
	AddLayoutProfile: 'attributes-add-layout-profile',
	RemoveLayoutProfile: 'attributes-remove-layout-profile',
	AssistantViewOpen: 'stage-manager:codeViewOpen',
	SetNewGuide: 'guideline:SetNewGuide',
	SetNewGuideline : 'guideline:SetNewGuideline',
	DeleteAllGuide: 'guideline:DeleteAllGuide',
	ReplaceCodeView: 'assistant-view:ReplaceCodeView',
	OpenPane: 'pane-manager:OpenPane',
	ChangeElementStyle: 'attribute-element:ChangeElementStyle',
	TextToolShowed: 'select-layer:TextToolShowed',
	OpenInstantTextEditor: 'instant-text-editor:Open',
	CloseInstantTextEditor: 'instant-text-editor:Close',
	ToggleInstantTextEditor: 'instant-text-editor:Toggle',
	PreviewElementToolbarBackward: 'preview-element-toolbar-backward',
	InteractionViewElementToolbarBackward: 'interaction-view-element-toolbar-backward',
	TooltipPanelOpen: 'tooltip-open',
	TooltipPanelClose: 'tooltip-close',
	ChangeProfile: 'ChangeProfile',
	RequestChangeProfile: 'RequestChangeProfile',
	RequestChangeDevice: 'RequestChangeDevice',
	ChangeShape: 'ChangeShape',
	ChangeLayoutType: 'ChangeLayoutType',
	changeLayoutOptions: 'ChangeLayoutOptions',
	ChangeImageStyle: 'changeImageStyle',
	ChangeImageFilter: 'changeImageFilter',
	PopupOpened : 'global:Popup.opened',
	ChangeCapability: 'attributes:change-capability',
	ChangeCapabilityParam: 'attributes:change-capability-params'
};

export {EVENTS, eventEmitter};
