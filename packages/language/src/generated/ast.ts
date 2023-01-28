/******************************************************************************
 * This file was generated by langium-cli 1.0.0.
 * DO NOT EDIT MANUALLY!
 ******************************************************************************/

/* eslint-disable */
import { AstNode, AbstractAstReflection, Reference, ReferenceInfo, TypeMetaData } from 'langium';

export type AbstractDeclaration = Attribute | DataModel | DataSource | Enum | FunctionDecl | GeneratorDecl | Plugin;

export const AbstractDeclaration = 'AbstractDeclaration';

export function isAbstractDeclaration(item: unknown): item is AbstractDeclaration {
    return reflection.isInstance(item, AbstractDeclaration);
}

export type AttributeAttributeName = string;

export type AttributeName = string;

export type BuiltinType = 'BigInt' | 'Boolean' | 'Bytes' | 'DateTime' | 'Decimal' | 'Float' | 'Int' | 'Json' | 'String';

export type DataModelAttributeName = string;

export type DataModelFieldAttributeName = string;

export type Expression = ArrayExpr | BinaryExpr | InvocationExpr | LiteralExpr | MemberAccessExpr | NullExpr | ReferenceExpr | ThisExpr | UnaryExpr;

export const Expression = 'Expression';

export function isExpression(item: unknown): item is Expression {
    return reflection.isInstance(item, Expression);
}

export type ExpressionType = 'Any' | 'Boolean' | 'DateTime' | 'Float' | 'Int' | 'Null' | 'String';

export type QualifiedName = string;

export type ReferenceTarget = DataModelField | EnumField | FunctionParam;

export const ReferenceTarget = 'ReferenceTarget';

export function isReferenceTarget(item: unknown): item is ReferenceTarget {
    return reflection.isInstance(item, ReferenceTarget);
}

export type TypeDeclaration = DataModel | Enum;

export const TypeDeclaration = 'TypeDeclaration';

export function isTypeDeclaration(item: unknown): item is TypeDeclaration {
    return reflection.isInstance(item, TypeDeclaration);
}

export interface Argument extends AstNode {
    readonly $container: InvocationExpr;
    readonly $type: 'Argument';
    name?: string
    value: Expression
}

export const Argument = 'Argument';

export function isArgument(item: unknown): item is Argument {
    return reflection.isInstance(item, Argument);
}

export interface ArrayExpr extends AstNode {
    readonly $container: Argument | ArrayExpr | AttributeArg | BinaryExpr | DataSourceField | FunctionDecl | GeneratorField | MemberAccessExpr | PluginField | UnaryExpr;
    readonly $type: 'ArrayExpr';
    items: Array<Expression>
}

export const ArrayExpr = 'ArrayExpr';

export function isArrayExpr(item: unknown): item is ArrayExpr {
    return reflection.isInstance(item, ArrayExpr);
}

export interface Attribute extends AstNode {
    readonly $container: Model;
    readonly $type: 'Attribute';
    attributes: Array<AttributeAttribute>
    name: AttributeName
    params: Array<AttributeParam>
}

export const Attribute = 'Attribute';

export function isAttribute(item: unknown): item is Attribute {
    return reflection.isInstance(item, Attribute);
}

export interface AttributeArg extends AstNode {
    readonly $container: AttributeAttribute | DataModelAttribute | DataModelFieldAttribute;
    readonly $type: 'AttributeArg';
    name?: string
    value: Expression
}

export const AttributeArg = 'AttributeArg';

export function isAttributeArg(item: unknown): item is AttributeArg {
    return reflection.isInstance(item, AttributeArg);
}

export interface AttributeAttribute extends AstNode {
    readonly $container: Attribute;
    readonly $type: 'AttributeAttribute';
    args: Array<AttributeArg>
    decl: Reference<Attribute>
}

export const AttributeAttribute = 'AttributeAttribute';

export function isAttributeAttribute(item: unknown): item is AttributeAttribute {
    return reflection.isInstance(item, AttributeAttribute);
}

export interface AttributeParam extends AstNode {
    readonly $container: Attribute;
    readonly $type: 'AttributeParam';
    default: boolean
    name: string
    type: AttributeParamType
}

export const AttributeParam = 'AttributeParam';

export function isAttributeParam(item: unknown): item is AttributeParam {
    return reflection.isInstance(item, AttributeParam);
}

export interface AttributeParamType extends AstNode {
    readonly $container: AttributeParam;
    readonly $type: 'AttributeParamType';
    array: boolean
    optional: boolean
    reference?: Reference<TypeDeclaration>
    type?: 'ContextType' | 'FieldReference' | 'TransitiveFieldReference' | ExpressionType
}

export const AttributeParamType = 'AttributeParamType';

export function isAttributeParamType(item: unknown): item is AttributeParamType {
    return reflection.isInstance(item, AttributeParamType);
}

export interface BinaryExpr extends AstNode {
    readonly $container: Argument | ArrayExpr | AttributeArg | BinaryExpr | DataSourceField | FunctionDecl | GeneratorField | MemberAccessExpr | PluginField | UnaryExpr;
    readonly $type: 'BinaryExpr';
    left: Expression
    operator: '!' | '!=' | '&&' | '<' | '<=' | '==' | '>' | '>=' | '?' | '^' | '||'
    right: Expression
}

export const BinaryExpr = 'BinaryExpr';

export function isBinaryExpr(item: unknown): item is BinaryExpr {
    return reflection.isInstance(item, BinaryExpr);
}

export interface DataModel extends AstNode {
    readonly $container: Model;
    readonly $type: 'DataModel';
    attributes: Array<DataModelAttribute>
    comments: Array<string>
    fields: Array<DataModelField>
    name: string
}

export const DataModel = 'DataModel';

export function isDataModel(item: unknown): item is DataModel {
    return reflection.isInstance(item, DataModel);
}

export interface DataModelAttribute extends AstNode {
    readonly $container: DataModel;
    readonly $type: 'DataModelAttribute';
    args: Array<AttributeArg>
    decl: Reference<Attribute>
}

export const DataModelAttribute = 'DataModelAttribute';

export function isDataModelAttribute(item: unknown): item is DataModelAttribute {
    return reflection.isInstance(item, DataModelAttribute);
}

export interface DataModelField extends AstNode {
    readonly $container: DataModel | Enum | FunctionDecl;
    readonly $type: 'DataModelField';
    attributes: Array<DataModelFieldAttribute>
    comments: Array<string>
    name: string
    type: DataModelFieldType
}

export const DataModelField = 'DataModelField';

export function isDataModelField(item: unknown): item is DataModelField {
    return reflection.isInstance(item, DataModelField);
}

export interface DataModelFieldAttribute extends AstNode {
    readonly $container: DataModelField;
    readonly $type: 'DataModelFieldAttribute';
    args: Array<AttributeArg>
    decl: Reference<Attribute>
}

export const DataModelFieldAttribute = 'DataModelFieldAttribute';

export function isDataModelFieldAttribute(item: unknown): item is DataModelFieldAttribute {
    return reflection.isInstance(item, DataModelFieldAttribute);
}

export interface DataModelFieldType extends AstNode {
    readonly $container: DataModelField;
    readonly $type: 'DataModelFieldType';
    array: boolean
    optional: boolean
    reference?: Reference<TypeDeclaration>
    type?: BuiltinType
}

export const DataModelFieldType = 'DataModelFieldType';

export function isDataModelFieldType(item: unknown): item is DataModelFieldType {
    return reflection.isInstance(item, DataModelFieldType);
}

export interface DataSource extends AstNode {
    readonly $container: Model;
    readonly $type: 'DataSource';
    fields: Array<DataSourceField>
    name: string
}

export const DataSource = 'DataSource';

export function isDataSource(item: unknown): item is DataSource {
    return reflection.isInstance(item, DataSource);
}

export interface DataSourceField extends AstNode {
    readonly $container: DataSource;
    readonly $type: 'DataSourceField';
    name: string
    value: InvocationExpr | LiteralExpr
}

export const DataSourceField = 'DataSourceField';

export function isDataSourceField(item: unknown): item is DataSourceField {
    return reflection.isInstance(item, DataSourceField);
}

export interface Enum extends AstNode {
    readonly $container: Model;
    readonly $type: 'Enum';
    fields: Array<EnumField>
    name: string
}

export const Enum = 'Enum';

export function isEnum(item: unknown): item is Enum {
    return reflection.isInstance(item, Enum);
}

export interface EnumField extends AstNode {
    readonly $container: DataModel | Enum | FunctionDecl;
    readonly $type: 'EnumField';
    name: string
}

export const EnumField = 'EnumField';

export function isEnumField(item: unknown): item is EnumField {
    return reflection.isInstance(item, EnumField);
}

export interface FunctionDecl extends AstNode {
    readonly $container: Model;
    readonly $type: 'FunctionDecl';
    expression?: Expression
    name: string
    params: Array<FunctionParam>
    returnType: FunctionParamType
}

export const FunctionDecl = 'FunctionDecl';

export function isFunctionDecl(item: unknown): item is FunctionDecl {
    return reflection.isInstance(item, FunctionDecl);
}

export interface FunctionParam extends AstNode {
    readonly $container: DataModel | Enum | FunctionDecl;
    readonly $type: 'FunctionParam';
    name: string
    type: FunctionParamType
}

export const FunctionParam = 'FunctionParam';

export function isFunctionParam(item: unknown): item is FunctionParam {
    return reflection.isInstance(item, FunctionParam);
}

export interface FunctionParamType extends AstNode {
    readonly $container: FunctionDecl | FunctionParam;
    readonly $type: 'FunctionParamType';
    array: boolean
    reference?: Reference<TypeDeclaration>
    type?: ExpressionType
}

export const FunctionParamType = 'FunctionParamType';

export function isFunctionParamType(item: unknown): item is FunctionParamType {
    return reflection.isInstance(item, FunctionParamType);
}

export interface GeneratorDecl extends AstNode {
    readonly $container: Model;
    readonly $type: 'GeneratorDecl';
    fields: Array<GeneratorField>
    name: string
}

export const GeneratorDecl = 'GeneratorDecl';

export function isGeneratorDecl(item: unknown): item is GeneratorDecl {
    return reflection.isInstance(item, GeneratorDecl);
}

export interface GeneratorField extends AstNode {
    readonly $container: GeneratorDecl;
    readonly $type: 'GeneratorField';
    name: string
    value: ArrayExpr | LiteralExpr
}

export const GeneratorField = 'GeneratorField';

export function isGeneratorField(item: unknown): item is GeneratorField {
    return reflection.isInstance(item, GeneratorField);
}

export interface InvocationExpr extends AstNode {
    readonly $container: Argument | ArrayExpr | AttributeArg | BinaryExpr | DataSourceField | FunctionDecl | GeneratorField | MemberAccessExpr | PluginField | UnaryExpr;
    readonly $type: 'InvocationExpr';
    args: Array<Argument>
    function: Reference<FunctionDecl>
}

export const InvocationExpr = 'InvocationExpr';

export function isInvocationExpr(item: unknown): item is InvocationExpr {
    return reflection.isInstance(item, InvocationExpr);
}

export interface LiteralExpr extends AstNode {
    readonly $container: Argument | ArrayExpr | AttributeArg | BinaryExpr | DataSourceField | FunctionDecl | GeneratorField | MemberAccessExpr | PluginField | UnaryExpr;
    readonly $type: 'LiteralExpr';
    value: boolean | number | string
}

export const LiteralExpr = 'LiteralExpr';

export function isLiteralExpr(item: unknown): item is LiteralExpr {
    return reflection.isInstance(item, LiteralExpr);
}

export interface MemberAccessExpr extends AstNode {
    readonly $container: Argument | ArrayExpr | AttributeArg | BinaryExpr | DataSourceField | FunctionDecl | GeneratorField | MemberAccessExpr | PluginField | UnaryExpr;
    readonly $type: 'MemberAccessExpr';
    member: Reference<DataModelField>
    operand: Expression
}

export const MemberAccessExpr = 'MemberAccessExpr';

export function isMemberAccessExpr(item: unknown): item is MemberAccessExpr {
    return reflection.isInstance(item, MemberAccessExpr);
}

export interface Model extends AstNode {
    readonly $type: 'Model';
    declarations: Array<AbstractDeclaration>
}

export const Model = 'Model';

export function isModel(item: unknown): item is Model {
    return reflection.isInstance(item, Model);
}

export interface NullExpr extends AstNode {
    readonly $container: Argument | ArrayExpr | AttributeArg | BinaryExpr | DataSourceField | FunctionDecl | GeneratorField | MemberAccessExpr | PluginField | UnaryExpr;
    readonly $type: 'NullExpr';
    value: string
}

export const NullExpr = 'NullExpr';

export function isNullExpr(item: unknown): item is NullExpr {
    return reflection.isInstance(item, NullExpr);
}

export interface Plugin extends AstNode {
    readonly $container: Model;
    readonly $type: 'Plugin';
    fields: Array<PluginField>
    name: string
}

export const Plugin = 'Plugin';

export function isPlugin(item: unknown): item is Plugin {
    return reflection.isInstance(item, Plugin);
}

export interface PluginField extends AstNode {
    readonly $container: Plugin;
    readonly $type: 'PluginField';
    name: string
    value: ArrayExpr | LiteralExpr
}

export const PluginField = 'PluginField';

export function isPluginField(item: unknown): item is PluginField {
    return reflection.isInstance(item, PluginField);
}

export interface ReferenceArg extends AstNode {
    readonly $container: ReferenceExpr;
    readonly $type: 'ReferenceArg';
    name: 'sort'
    value: 'Asc' | 'Desc'
}

export const ReferenceArg = 'ReferenceArg';

export function isReferenceArg(item: unknown): item is ReferenceArg {
    return reflection.isInstance(item, ReferenceArg);
}

export interface ReferenceExpr extends AstNode {
    readonly $container: Argument | ArrayExpr | AttributeArg | BinaryExpr | DataSourceField | FunctionDecl | GeneratorField | MemberAccessExpr | PluginField | UnaryExpr;
    readonly $type: 'ReferenceExpr';
    args: Array<ReferenceArg>
    target: Reference<ReferenceTarget>
}

export const ReferenceExpr = 'ReferenceExpr';

export function isReferenceExpr(item: unknown): item is ReferenceExpr {
    return reflection.isInstance(item, ReferenceExpr);
}

export interface ThisExpr extends AstNode {
    readonly $container: Argument | ArrayExpr | AttributeArg | BinaryExpr | DataSourceField | FunctionDecl | GeneratorField | MemberAccessExpr | PluginField | UnaryExpr;
    readonly $type: 'ThisExpr';
    value: string
}

export const ThisExpr = 'ThisExpr';

export function isThisExpr(item: unknown): item is ThisExpr {
    return reflection.isInstance(item, ThisExpr);
}

export interface UnaryExpr extends AstNode {
    readonly $container: Argument | ArrayExpr | AttributeArg | BinaryExpr | DataSourceField | FunctionDecl | GeneratorField | MemberAccessExpr | PluginField | UnaryExpr;
    readonly $type: 'UnaryExpr';
    operand: Expression
    operator: '!'
}

export const UnaryExpr = 'UnaryExpr';

export function isUnaryExpr(item: unknown): item is UnaryExpr {
    return reflection.isInstance(item, UnaryExpr);
}

export interface ZModelAstType {
    AbstractDeclaration: AbstractDeclaration
    Argument: Argument
    ArrayExpr: ArrayExpr
    Attribute: Attribute
    AttributeArg: AttributeArg
    AttributeAttribute: AttributeAttribute
    AttributeParam: AttributeParam
    AttributeParamType: AttributeParamType
    BinaryExpr: BinaryExpr
    DataModel: DataModel
    DataModelAttribute: DataModelAttribute
    DataModelField: DataModelField
    DataModelFieldAttribute: DataModelFieldAttribute
    DataModelFieldType: DataModelFieldType
    DataSource: DataSource
    DataSourceField: DataSourceField
    Enum: Enum
    EnumField: EnumField
    Expression: Expression
    FunctionDecl: FunctionDecl
    FunctionParam: FunctionParam
    FunctionParamType: FunctionParamType
    GeneratorDecl: GeneratorDecl
    GeneratorField: GeneratorField
    InvocationExpr: InvocationExpr
    LiteralExpr: LiteralExpr
    MemberAccessExpr: MemberAccessExpr
    Model: Model
    NullExpr: NullExpr
    Plugin: Plugin
    PluginField: PluginField
    ReferenceArg: ReferenceArg
    ReferenceExpr: ReferenceExpr
    ReferenceTarget: ReferenceTarget
    ThisExpr: ThisExpr
    TypeDeclaration: TypeDeclaration
    UnaryExpr: UnaryExpr
}

export class ZModelAstReflection extends AbstractAstReflection {

    getAllTypes(): string[] {
        return ['AbstractDeclaration', 'Argument', 'ArrayExpr', 'Attribute', 'AttributeArg', 'AttributeAttribute', 'AttributeParam', 'AttributeParamType', 'BinaryExpr', 'DataModel', 'DataModelAttribute', 'DataModelField', 'DataModelFieldAttribute', 'DataModelFieldType', 'DataSource', 'DataSourceField', 'Enum', 'EnumField', 'Expression', 'FunctionDecl', 'FunctionParam', 'FunctionParamType', 'GeneratorDecl', 'GeneratorField', 'InvocationExpr', 'LiteralExpr', 'MemberAccessExpr', 'Model', 'NullExpr', 'Plugin', 'PluginField', 'ReferenceArg', 'ReferenceExpr', 'ReferenceTarget', 'ThisExpr', 'TypeDeclaration', 'UnaryExpr'];
    }

    protected override computeIsSubtype(subtype: string, supertype: string): boolean {
        switch (subtype) {
            case ArrayExpr:
            case BinaryExpr:
            case InvocationExpr:
            case LiteralExpr:
            case MemberAccessExpr:
            case NullExpr:
            case ReferenceExpr:
            case ThisExpr:
            case UnaryExpr: {
                return this.isSubtype(Expression, supertype);
            }
            case Attribute:
            case DataSource:
            case FunctionDecl:
            case GeneratorDecl:
            case Plugin: {
                return this.isSubtype(AbstractDeclaration, supertype);
            }
            case DataModel:
            case Enum: {
                return this.isSubtype(AbstractDeclaration, supertype) || this.isSubtype(TypeDeclaration, supertype);
            }
            case DataModelField:
            case EnumField:
            case FunctionParam: {
                return this.isSubtype(ReferenceTarget, supertype);
            }
            default: {
                return false;
            }
        }
    }

    getReferenceType(refInfo: ReferenceInfo): string {
        const referenceId = `${refInfo.container.$type}:${refInfo.property}`;
        switch (referenceId) {
            case 'AttributeAttribute:decl':
            case 'DataModelAttribute:decl':
            case 'DataModelFieldAttribute:decl': {
                return Attribute;
            }
            case 'AttributeParamType:reference':
            case 'DataModelFieldType:reference':
            case 'FunctionParamType:reference': {
                return TypeDeclaration;
            }
            case 'InvocationExpr:function': {
                return FunctionDecl;
            }
            case 'MemberAccessExpr:member': {
                return DataModelField;
            }
            case 'ReferenceExpr:target': {
                return ReferenceTarget;
            }
            default: {
                throw new Error(`${referenceId} is not a valid reference id.`);
            }
        }
    }

    getTypeMetaData(type: string): TypeMetaData {
        switch (type) {
            case 'ArrayExpr': {
                return {
                    name: 'ArrayExpr',
                    mandatory: [
                        { name: 'items', type: 'array' }
                    ]
                };
            }
            case 'Attribute': {
                return {
                    name: 'Attribute',
                    mandatory: [
                        { name: 'attributes', type: 'array' },
                        { name: 'params', type: 'array' }
                    ]
                };
            }
            case 'AttributeAttribute': {
                return {
                    name: 'AttributeAttribute',
                    mandatory: [
                        { name: 'args', type: 'array' }
                    ]
                };
            }
            case 'AttributeParam': {
                return {
                    name: 'AttributeParam',
                    mandatory: [
                        { name: 'default', type: 'boolean' }
                    ]
                };
            }
            case 'AttributeParamType': {
                return {
                    name: 'AttributeParamType',
                    mandatory: [
                        { name: 'array', type: 'boolean' },
                        { name: 'optional', type: 'boolean' }
                    ]
                };
            }
            case 'DataModel': {
                return {
                    name: 'DataModel',
                    mandatory: [
                        { name: 'attributes', type: 'array' },
                        { name: 'comments', type: 'array' },
                        { name: 'fields', type: 'array' }
                    ]
                };
            }
            case 'DataModelAttribute': {
                return {
                    name: 'DataModelAttribute',
                    mandatory: [
                        { name: 'args', type: 'array' }
                    ]
                };
            }
            case 'DataModelField': {
                return {
                    name: 'DataModelField',
                    mandatory: [
                        { name: 'attributes', type: 'array' },
                        { name: 'comments', type: 'array' }
                    ]
                };
            }
            case 'DataModelFieldAttribute': {
                return {
                    name: 'DataModelFieldAttribute',
                    mandatory: [
                        { name: 'args', type: 'array' }
                    ]
                };
            }
            case 'DataModelFieldType': {
                return {
                    name: 'DataModelFieldType',
                    mandatory: [
                        { name: 'array', type: 'boolean' },
                        { name: 'optional', type: 'boolean' }
                    ]
                };
            }
            case 'DataSource': {
                return {
                    name: 'DataSource',
                    mandatory: [
                        { name: 'fields', type: 'array' }
                    ]
                };
            }
            case 'Enum': {
                return {
                    name: 'Enum',
                    mandatory: [
                        { name: 'fields', type: 'array' }
                    ]
                };
            }
            case 'FunctionDecl': {
                return {
                    name: 'FunctionDecl',
                    mandatory: [
                        { name: 'params', type: 'array' }
                    ]
                };
            }
            case 'FunctionParamType': {
                return {
                    name: 'FunctionParamType',
                    mandatory: [
                        { name: 'array', type: 'boolean' }
                    ]
                };
            }
            case 'GeneratorDecl': {
                return {
                    name: 'GeneratorDecl',
                    mandatory: [
                        { name: 'fields', type: 'array' }
                    ]
                };
            }
            case 'InvocationExpr': {
                return {
                    name: 'InvocationExpr',
                    mandatory: [
                        { name: 'args', type: 'array' }
                    ]
                };
            }
            case 'Model': {
                return {
                    name: 'Model',
                    mandatory: [
                        { name: 'declarations', type: 'array' }
                    ]
                };
            }
            case 'Plugin': {
                return {
                    name: 'Plugin',
                    mandatory: [
                        { name: 'fields', type: 'array' }
                    ]
                };
            }
            case 'ReferenceExpr': {
                return {
                    name: 'ReferenceExpr',
                    mandatory: [
                        { name: 'args', type: 'array' }
                    ]
                };
            }
            default: {
                return {
                    name: type,
                    mandatory: []
                };
            }
        }
    }
}

export const reflection = new ZModelAstReflection();